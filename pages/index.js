
import HEAD from 'next/head';

export default () => (
  <div>
      <style jsx>{`<style>
        .head-list{
            content: "";
            border-left: 1px solid #e2e2e2;
            margin-top: 3px;
        }

        .bg-red-color{
            background-color:#c00;
        }

        .text-red-color{
            color: #c00;
        }

        .btn-border{
            border: 1px solid #e2e2e2;
        }
        `}</style>
    <HEAD>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"></link>
        </HEAD>
      
      

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="pr-5 mr-5"></div>
        <a className="navbar-brand mr-5 head-list" href="#">
            <img src="../images/cuidateplus.svg" width="30" height="30" className="d-inline-block align-top" alt=""></img>
            CuidatePlus
        </a>
        <a className="navbar-brand mr-1 head-list" href="#">
        <img src="trending.svg" width="30" height="30" className="d-inline-block align-top" alt=""></img>
        Lo+Trending
        </a>
        <div className="pr-5 mr-5 pl-5 ml-5"></div>
        <a className="navbar-brand" href="#">
            <img src="marca.png" width="30" height="30" className="d-inline-block align-top" alt=""></img>
        </a>
        <div className="dropdown show">
            <a className="btn dropdown-toggle btn-border" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Mx
            </a>
        </div>
        <div>
            <button type="button" className="btn bg-red-color text-light ">Suscribete</button>
            <button type="button" className="btn bg-light text-red-color btn-border">Suscribete</button>
        </div>
    </nav>
  </div>
)