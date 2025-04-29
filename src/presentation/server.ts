import { CronJob } from 'cron';
import { CronService } from './cron/cron-service';
import { CheckService } from '../domain/use-cases/checks/check-service';
export class Server {
    public static start() {
        console.log('Server started...')
        CronService.createJob(
            '*/5 * * * * *',
            ()=>{
               const url="https://www.google.com"
                new CheckService(
                    ()=>console.log(`${url} is ok`),
                    (error:string)=>console.error(`Error callback executed with error: ${error}`)
                ).execute('https://www.google.com')
              //new CheckService().execute('http://localhost:3000/posts')
            }
        )
       



    }
}