import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TestService } from 'src/app/services/test.service';
import { TestNativeService } from 'src/app/services/test-native.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  private user = {
    id: '',
    name: '',
  };

  private users = new Array<any>();

  constructor(
    private testService: TestService,
    private testNativeService: TestNativeService,
    private alertController: AlertController,
  ) { }

  ngOnInit() { }

  createUser() {
    console.log('user: ' + JSON.stringify(this.user));

    this.testService.createUser(this.user).subscribe(
      (data) => {
        if (data['result'] == 'ok') {
          console.log(data['message']);
          this.showAlert('Success', 'User created successfully');

          this.user.id = '';
          this.user.name = '';
          this.selectAllUsers();
        }
        else if (data['result'] == 'failed') {
          console.error(data['message']);
          this.showAlert('Error', data['message']);
        }
      },
      (error) => {
        console.error(error);
        this.showAlert('Error', error.message);
      }
    );
  }

  createUserNative() {
    console.log('User: ' + JSON.stringify(this.user));

    this.testNativeService.createUser(this.user)
      .then(response => {
        console.log('Response recieved:');
        console.log(response);

        let data = JSON.parse(response.data);

        if (data.result == 'ok') {
          console.log(data.message);
          this.showAlert('Success', 'User created successfully');

          this.user.id = '';
          this.user.name = '';
          this.selectAllUsersNative();
        }
        else if (data.result == 'failed') {
          console.error(data.message);
          this.showAlert('Error', data.message);
        }
        else {
          console.error('Unknown error. Response is ' + JSON.stringify(data));
          this.showAlert('Error', 'Unknown error. Message is: ' + JSON.stringify(data));
        }
      })
      .catch(error => {
        console.error('Error encountered:');
        console.error(error);

        this.showAlert('Error', JSON.stringify(error));
      });
  }

  deleteUserNative() {
    console.log('id: ' + this.user.id);

    this.testNativeService.deleteUser(this.user.id).then(response => {
      console.log('Response recieved:');
      console.log(response);
    })
    .catch(error => {
      console.error('Error encountered:');
      console.error(error);

      this.showAlert('Error', JSON.stringify(error));
    });
  }

  selectAllUsers() {
    this.testService.selectAllUsers().subscribe(
      (data) => {
        console.log('raw: ' + data);
        console.log('parsed: ' + JSON.stringify(data));

        this.users = new Array<any>();

        for (let i of data) {
          this.users.push(JSON.stringify(i));
        }
      },
      (error) => {
        console.error(error);
        this.showAlert('Error', error.message);
      }
    );
  }

  selectAllUsersNative() {
    this.testNativeService.selectAllUsers()
      .then(data => {
        console.log('Data recieved:');
        console.log(data);

        let rawData: string = data.data;
        let parsedData: any = JSON.parse(rawData);

        this.users = new Array<any>();

        for (let i of parsedData) {
          this.users.push(JSON.stringify(i));
        }

        this.showAlert('Success', 'Query successful!');
      })
      .catch(error => {
        console.error('Error encountered:');
        console.error(error);

        this.showAlert('Error', JSON.stringify(error));
      });
  }

  selectAllUsersOopExample() {
    this.testNativeService.selectAllUsersOopExample().then(request => {
      console.log('Data recieved:');
      console.log(request);

      let rawData: string = request.data;
      let parsedData: any = JSON.parse(rawData);

      this.users = new Array<any>();

      for (let i of parsedData) {
        this.users.push(JSON.stringify(i));
      }

      this.showAlert('Success', 'Query successful!');
    })
    .catch(error => {
      console.error('Error encountered:');
      console.error(error);

      this.showAlert('Error', JSON.stringify(error));
    });
  }

  async showAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ["Ok"],
    });

    await alert.present();
  }
}
