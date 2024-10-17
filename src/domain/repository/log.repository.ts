import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

export abstract class LogRepository {
  abstract saveLogRepository(log:LogEntity):Promise<void>
  abstract getLogRepository(severityLevel:LogSeverityLevel):Promise<LogEntity[]>
}