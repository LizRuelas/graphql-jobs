import React, { Component }  from 'react';
import './App.css';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag'



class App extends Component {
	constructor() {
		super();
		this.state = {
			searchString: '',
			jobs: []
		};
		this.handleChange = this.handleChange.bind(this);
		
	}

	componentInput() {
		this.setState({
      jobs: this.props.data.jobs
		});
	}
  
  handleChange = event => {
		this.setState({
      searchString: event.target.value
		});
	};
	
 render() {
	const { loading , error , jobs } = this.props.data
	if (loading) return 'Cargando...';
  if (error) return `Error! ${error.message}`;

	let _jobs = jobs;
  let search = this.state.searchString.trim().toLowerCase();
	if (search.length > 0) {
		_jobs = _jobs.filter(function(job) {
			return job.title.toLowerCase().match(search);
		});
	}

	

  return (
    <React.Fragment>

		<div className="container">
			<input  
					type="text"
					value={this.state.searchString}
					onChange={this.handleChange}
					placeholder="Buscar">
			</input>
		</div>
		<ul>
			{_jobs.map(l => {
				return (
					<li>
						{l.title} 
					</li>
				);
			})}
		</ul>
	</React.Fragment>
  );
 }
}

const GET_JOBS = gql`
{
  jobs {
    title
  }
}
`;
const AppWithData = graphql(
  GET_JOBS,
  {}
)(App)



export default AppWithData;
