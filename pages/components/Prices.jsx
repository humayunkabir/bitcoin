import { Component } from 'react';

class Prices extends Component {
  state = {
    currency: 'USD'
  }
  render() {
    const { currency } = this.state;
    const { data } = this.props;

    if (data.message) return (
      <div className="card mt-4">
        <div className="card-body">
          <div className="alert alert-danger mb-0">{data.message}</div>
        </div>
      </div>
    ); 
    
    return (
      <div className="card mt-4">
        <div className="card-header">
          <div className="row align-items-center">
            <div className="col">
              <h4 className="mb-0">Check Bitcoin rate</h4>
            </div>
            <div className="col-lg-3 mt-2 mt-lg-0">
              <select id="currency" onChange={(e) => this.setState({ currency: e.target.value })} className="form-control">
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>
        </div>
        <div className="card-body bg-light">
          <p className="lead mb-0">{data.bpi[currency].description} : <span className="badge badge-primary">{data.bpi[currency].code}</span> <strong>{data.bpi[currency].rate}</strong></p>
          <hr/>
          <small className="mb-0">Updated at {data.time.updated}</small>
        </div>
        <div className="card-footer">
          <div className="alert alert-info mb-0">{data.disclaimer}</div>
        </div>
      </div>
    );
  }
}
 
export default Prices;
