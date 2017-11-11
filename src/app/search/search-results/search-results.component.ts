import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchResultsComponent implements OnInit {
  results
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let mockData = [
      {
        complaintDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet ipsum a nunc imperdiet, quis volutpat orci egestas. Duis vitae ultrices felis, sit amet lobortis nisl. Maecenas orci magna, eleifend vel dolor sit amet, consectetur sodales ex. Mauris feugiat elementum risus, eu imperdiet sapien tristique vel. Morbi scelerisque accumsan sagittis. Vivamus ullamcorper viverra nunc in vehicula. Mauris ullamcorper urna ut quam fringilla iaculis. Sed convallis imperdiet ante eu tristique. Pellentesque nisi metus, eleifend id molestie sit amet, sagittis et lectus. Aliquam eu interdum quam. Duis facilisis ante turpis, id tempor lorem vulputate quis. Cras scelerisque risus eros, ac ornare ligula auctor eu. Aliquam vel congue tortor. Pellentesque laoreet quam a finibus malesuada. Nam auctor ac felis non viverra.',
        status:'Active',
        complainant: {
          fullName:'Eman Picar',
          nickname: 'boy dota',
          address: '123',
          gender: 'Male',
          birthdate: '1.2.3'
        },
        complainee: {
          fuillName: 'Karl Bernardo',
          nickname: 'lols',
          address: '123',
          gender: 'Male',
          birthdate: '1.2.3'
        },
        barangay: {
          officerReporter: 'Keboy',
          barangayName: 'kaligayahan',
          barangayNumber: '556',
          contactNumber: '11111',
          barangayCaptain: 'James'
        }
      },
      {
        complaintDescription: 'long paragraph here',
        status:'Active',
        complainant: {
          fullName:'Eman Picar',
          nickname: 'boy dota',
          address: '123',
          gender: 'Male',
          birthdate: '1.2.3'
        },
        complainee: {
          fuillName: 'Karl Bernardo',
          nickname: 'lols',
          address: '123',
          gender: 'Male',
          birthdate: '1.2.3'
        },
        barangay: {
          officerReporter: 'Keboy',
          barangayName: 'kaligayahan',
          barangayNumber: '556',
          contactNumber: '11111',
          barangayCaptain: 'James'
        }
      }
    ]
    this.route.queryParams.subscribe((query:Params)=> {

      this.results = mockData
    })
  }

}
