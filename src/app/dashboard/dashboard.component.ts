import { ApiService } from '../services/authservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  NumberOfUser:any;

  constructor(private apiService:ApiService ) { }

  ngOnInit(): void {
    this.getUser();
  }
  public getUser(){
    this.apiService.getData(' https://api.expert-sante.continuousnet.com/api/dashboard/total/User').subscribe(
      (response :any)=> {
        this.NumberOfUser = response;
        console.log(this.NumberOfUser);
      },
      error  => {
        console.error('Erreur lors de la récupération des données :', error);
      }
);
}
}
