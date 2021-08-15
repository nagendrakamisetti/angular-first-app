import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // element type
  // selector: '[app-servers]', // attribute type
  // selector: '.app-servers', // class type
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreationStatus:string = 'No Server was created!';
  serverName:string = 'Test Server';
  serverAdded:boolean = false;
  servers = ['Test server1', 'Test server2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000
    );
  }

  ngOnInit(): void {
  }

  onServerCreate() {
    this.serverAdded = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'New Server is created';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
