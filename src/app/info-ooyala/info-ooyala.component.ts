import { Component, OnInit , ViewChild} from '@angular/core';
import { CallWSService } from '../shared/call-ws.service';
import { AllInfoVideoOoyala } from '../models/all-info-video-ooyala';
import { DetailOoyalaComponent } from '../detail-ooyala/detail-ooyala.component';



@Component({
  selector: 'app-info-ooyala',
  templateUrl: './info-ooyala.component.html',
  styleUrls: ['./info-ooyala.component.css']
})
export class InfoOoyalaComponent implements OnInit {
public loading: boolean;
  public idContent :any ;
  infoOoyala: any;
  mensajeTxt: string;
  displaydetailOoyala  = 'none';
  modalMsg  = 'none';
  @ViewChild('modalDetailOoyala') detailOoyalaComponent: DetailOoyalaComponent;




  constructor( private callWSService: CallWSService  ) { }

  ngOnInit() {


  }

  clean( val: string ) {
    this.loading  = true;
    if ( this.idContent !== '' ) {
      this.idContent = val;
    }
    this.loading  = false;
  }

 async  getInfoOoyala(idcontent: any ) {
    this.loading  = true;
    if ( idcontent !== '') {

      console.log('idcontent : ' + idcontent);
      this.loading  = false;
     await this.callWSService._getAllInfoOoyala(idcontent).subscribe(( data: any ) => {
      console.log('1.- infoOoyala : ' + JSON.stringify(data));

      if (data !== undefined) {
         this.detailOoyalaComponent.setDetailInfo(data);
        console.log('2.- infoOoyala : ' + JSON.stringify(this.detailOoyalaComponent.detalle));
        this.displaydetailOoyala  = 'block';
      } else {

        this.mensajeTxt = 'Error con el Content ID ';
        this.modalMsg  = 'block';
      }

     },
     err => {
      this.mensajeTxt = 'Error al procesar la información . ';
      this.modalMsg  = 'block';
       console.error( 'Error : ' + err);
     } );
    }

    this.loading  = false;
  }


  onCloseHandled(param: string ) {
      if ( param === 'displaydetailOoyala' ) {
        this.displaydetailOoyala = 'none';
      } else if (param === 'modalMsg' ) {
          this.modalMsg = 'none';
      }


  }
}
