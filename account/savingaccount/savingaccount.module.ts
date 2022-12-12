import { Module } from '@nestjs/common';
import { SingleaccountModule } from './singleaccount/singleaccount.module';
import { JoinaccountModule } from './joinaccount/joinaccount.module';

@Module({
  imports: [SingleaccountModule, JoinaccountModule]
})
export class SavingaccountModule {
  constructor(){
    console.log("This is SavingaccountModule");
  }
}
