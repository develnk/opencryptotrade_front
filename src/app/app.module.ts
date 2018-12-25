import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsocketModule } from './websocket';
import { ChartsComponent } from './charts/charts.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';
import { OrderBookComponent } from './order-book/order-book.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { TradeComponent } from './trade/trade.component';
import { ChatComponent } from './chat/chat.component';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    TradeHistoryComponent,
    OrderBookComponent,
    MyOrdersComponent,
    TradeComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebsocketModule.config({
      url: environment.ws
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
