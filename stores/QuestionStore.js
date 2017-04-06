import { observable } from 'mobx';
import { ListView } from 'react-native';
import Rest from 'fetch-on-rest';

class QuestionStore {

  @observable dataSource;
  @observable sports = {};

  constructor(){
    const ds = new ListView.DataSource({ rowHasChanged: (r1,r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows([]);
    this.api = new Rest("http://dbserver.team-upp.com/");
    this.refresh();
  }

  add(doc){
    this.api.post('api/sports', doc);
  }

  update(id, doc){
    const self = this;

    this.api.put('api/sports/' + id, doc).then(function(){

      self.findOne(id);
    });
  }

  findOne(id){
    const self = this;

    this.api.get('api/sports/' + id).then(function(response){
      self.sports = response;
    });
    self.refresh();
  }

  refresh(){
    const self = this;

    this.api.get('api/sports').then(function(response){
      self.dataSource = self.dataSource.cloneWithRows(response);
    });
  }

  search(search){

    const self = this;

    this.api.get('api/sports', {search: search}).then( function ( response ){
      self.dataSource = self.dataSource.cloneWithRows(response);
    });
  }
}

const questionStore = new QuestionStore();
export default questionStore;
