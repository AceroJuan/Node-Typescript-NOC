import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasouce } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repostories/log.repository.impl";
import { CronService } from "./cron/cron-service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasouce()
)

export class ServerApp {
  public static start() {
    console.log('Server started...')

    CronService.createJob(
      '*/5 * * * * *',
      () => {
        const url = "https://google.com"
        new CheckService(
          fileSystemLogRepository,
          () => console.log(`${url} is ok!`),
          (error:string) => console.log(error),
        ).execute(url)
        // new CheckService().execute('http://localhost:3000')
      }
    )
  }
}