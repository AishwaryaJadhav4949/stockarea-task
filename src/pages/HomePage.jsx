import React, { Component } from 'react'
import FilterPanel from '../components/FilterPanel'
import WarehouseList from '../components/WarehouseList'

class HomePage extends Component {


  state = {
    users: [],
    sortedWarehouses: [],
    searchTerm: '',
    loading: true,
    city: "all",
    cluster: "all",
    space_available: 0,
    maxSize: 0,
    minSize: 0,
  }

  componentDidMount() {
    
  this.getData()
 
  }
  
  getData = async ()=>{
    let { sortedWarehouses ,users} = this.state;
   
   
    const api = "https://json-warehouse.herokuapp.com/details";
       try {

        
        let response = await fetch(api);
          let data = await response.json();
          console.log(data);

          this.setState({
            users : data,
            loading: false,
            sortedWarehouses: data
          })
      } catch (error) {
            console.log(error);
      }
  }


  handleChange = event => {
    const target = event.target
    const value = target.value

    const name = event.target.name

    this.setState({
      [name]: value
    }, this.filterWarehouses)

  }
  setSearchTerm = (event) => {
    let value = event.target.value.toLowerCase()
    this.setState({
      searchTerm: value
    }, this.filterWarehouses)

  }
  filterWarehouses = () => {
    let { users, city, cluster, space_available, searchTerm } = this.state

    let tempWarehouses = [...users];

    if (searchTerm) {
      tempWarehouses = tempWarehouses.filter((item) => item.name.toLowerCase().includes(searchTerm))
    }
    space_available = parseInt(space_available);
    if (city !== 'all') {
      tempWarehouses = tempWarehouses.filter(item => item.city === city)
    }

    if (cluster !== 'all') {
      tempWarehouses = tempWarehouses.filter(item => item.cluster === cluster)
    }
    if (space_available) {
      tempWarehouses = tempWarehouses.filter(item => parseInt(item.space_available) >= space_available);

    }
    this.setState({

      sortedWarehouses: tempWarehouses
    })
  }
  render() {
    const { sortedWarehouses,loading, users, city, cluster, minSize, maxSize, space_available, searchTerm } = this.state;
     console.log(sortedWarehouses)
    return (
   

      <div>

        <FilterPanel city={city} minSize={minSize} maxSize={maxSize} cluster={cluster} searchTerm={searchTerm}
          space_available={space_available} handleChange={this.handleChange}
          setSearchTerm={this.setSearchTerm} users={users} sortedWarehouses={sortedWarehouses} />

        <WarehouseList sortedWarehouses={sortedWarehouses} loading={loading} />
      </div>
    )
  }
}



export default HomePage