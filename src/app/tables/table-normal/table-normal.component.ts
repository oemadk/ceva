import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EChartOption } from 'echarts';
import { SidebarService } from '../../services/sidebar.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-table-normal',
  templateUrl: './table-normal.component.html',
  styleUrls: ['./table-normal.component.css']
})
export class TableNormalComponent implements OnInit {

  public visitorsOptions: EChartOption = {};
  public visitsOptions: EChartOption = {};
  public sidebarVisible: boolean = true;


  settings = {
  columns: {
    clientid: {
      title: 'Customer ID'
    },
    name: {
      title: 'Customer Name'
    },


    phone: {
      title: 'Phone'
    },

        openingBalance: {
      title: 'Opening Balance'
    },

        endingBalance: {
      title: 'Ending Balance'
    },
    status: {
      title: 'Status',
      type: 'html',
      valuePrepareFunction: (data) => {

          if(data == "Approved"){
       return '<p  class="badge badge-success">' + data + '</p>'; }



       return '<p class="badge badge-warning">' + data + '</p>'; },


    }
  },

  actions:{
      add: false,
  edit: false,
  delete: false,
  custom: [{ name: 'ourCustomAction', title: 'Show Statement' }],
  position: 'right'
  }
};

data = [
  {
    id: 1,
    name: "Omar Emad",
    status: "Approved",
    clientid: "142",
    phone: "01111204333",
    openingBalance:"1900 EGP",
    endingBalance:"20000 EGP"
  },
  {
    id: 2,
    name: "Belal Tarek",
    status: "Pending",
    clientid: "1422",
    phone: "011112043123",
        openingBalance:"11240 EGP",
    endingBalance:"24400 EGP"
  },
  
  
  {
    id: 11,
    name: "Ahmed Shafee",
    status: "Pending",
    clientid: "144",
    phone: "0102312312",
        openingBalance:"12200 EGP",
    endingBalance:"28000 EGP"
  }
];

  constructor(private sidebarService: SidebarService, private cdr: ChangeDetectorRef, private router: Router) {
    this.visitorsOptions = this.loadLineChartOptions([3, 5, 1, 6, 5, 4, 8, 3], "#49c5b6");
    this.visitsOptions = this.loadLineChartOptions([4, 6, 3, 2, 5, 6, 5, 4], "#f4516c");
  }



  ngOnInit() {
  }

onCustomAction(event) {
  alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`);
  console.log(event)
  this.router.navigate(['/admin/pages/page-faq']);
}
  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }

  loadLineChartOptions(data, color) {
    let chartOption: EChartOption;
    let xAxisData: Array<any> = new Array<any>();

    data.forEach(element => {
      xAxisData.push("");
    });

    return chartOption = {
      xAxis: {
        type: 'category',
        show: false,
        data: xAxisData,
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        show: false
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params, ticket, callback) {
          return '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + color + ';"></span>' + params[0].value;
        }
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        top: '0%',
        containLabel: false
      },
      series: [{
        data: data,
        type: 'line',
        showSymbol: false,
        symbolSize: 1,
        lineStyle: {
          color: color,
          width: 1
        }
      }]
    };
  }

}
