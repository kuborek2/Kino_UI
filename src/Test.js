import logo from './logo.svg';
import './repertuar.css';
import { Navbar } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import { ReactPictureGrid } from 'react-picture-grid';
import {Link} from 'react-router-dom';
function Test() {
  const data = [
    {
      image:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4VNhjiVyURBFnzv9DZ2jFTSKHU6.jpg',
      title: 'Nature 01',
      description: 'This picture is taken from unsplash.com',
    },
    {
      image:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4VNhjiVyURBFnzv9DZ2jFTSKHU6.jpg',
      title: 'Nature 02',
      description: 'This picture is taken from unsplash.com',
    },


  ];
  return (
    <div className='cont'>
      <div class="cos">
      <div class="row">
        <div   class="column">
          <h2>Spiderman No Way Home</h2>
        <a href="https://github.com/Joeyryanbridges">
          <img style={{paddingLeft: "15%"}} src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"></img>
          </a>
          <h3>11:30 2D DUBBING</h3>
          <h3>16:50 2D NAPISY</h3>
        </div>
        <div class="column">
          <h2>Spiderman No Way Home</h2>
        <a href="https://github.com/Joeyryanbridges">
          <img style={{paddingLeft: "15%"}} src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"></img>
          </a>
          <h3>11:30 2D DUBBING</h3>
          <h3>16:50 2D NAPISY</h3>
        </div>
        <div  class="column">
          <h2>Spiderman No Way Home</h2>
        <a href="https://github.com/Joeyryanbridges">
          <img style={{paddingLeft: "15%"}} src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"></img>
          </a>
          <h3>11:30 2D DUBBING</h3>
          <h3>16:50 2D NAPISY</h3>
        </div>
        <div class="column">
          <h2>Spiderman No Way Home</h2>
        <a href="https://github.com/Joeyryanbridges">
          <img style={{paddingLeft: "15%"}} src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"></img>
          </a>
          <h3>11:30 2D DUBBING</h3>
          <h3>16:50 2D NAPISY</h3>
        </div>
        
      </div>
      </div>
    </div>
  );
}

export default Test;


