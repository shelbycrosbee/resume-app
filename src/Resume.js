import React from 'react';
import './App.css';
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container"


class Resume extends React.Component {

  render() {
    return (
      <Container>
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="index.html">Shelby Miller</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="./resume.html">Resume</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Undergraduate Projects
            </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="./projects.html">Projects Home</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="http://lcphysx.lclark.edu/project/star-in-a-jar/">Star in a jar</a>
                    <a class="dropdown-item" href="http://lcphysx.lclark.edu/project/the-stirling-engine-revisited/">Stirling
                Engine</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <section class="container-fluid px-lg-5">

          <br />
          <div class="text-center">
            <h3><u>PROFESSIONAL EXPERIENCE</u></h3>
            <br />
          </div>

          <dl class="row">
            <dt class="col-sm-4"><strong>Lone Mountain Sports</strong><em style="font-size: 15px">-Big Sky,
          MT</em><br /><small>November 2017-April 2019</small> </dt>
            <dd class="col-sm-8">
              <p>Ski Shop Technician/ Rental Sales Associate</p>
              <ul>
                <li>
                  Cultivated an ablility to handle the pressure of customer needs for fast service and quick turnaround in a
                  highly trafficked vacation based business. Succeeded in tailoring to a customer's specific preferences
                  while renting, maintaining and repairing ski and snowboard equipment.
            </li>
              </ul>
            </dd>

            <dt class="col-sm-4"><strong>Montana Whitewater</strong><em style="font-size: 15px">-Gallatin Gateway,
          MT</em><br /><small>May 2016-August 2018</small> </dt>
            <dd class="col-sm-8">
              <p>Raft Guide</p>
              <ul>
                <li>Provided excellent customer service and demonstrated professionalism and leadership capabilities while
            guiding guests on paddle rafts for one and two days trips on the Gallatin River</li>
              </ul>
            </dd>

            <dt class="col-sm-4"><strong>Miller Lumber Company</strong><em style="font-size: 15px">-Bend,
          OR</em><br /><small>September 2018-October 2018</small></dt>
            <dd class="col-sm-8">
              <p>Inside Sales</p>
              <ul>
                <li>
                  Developed relationships with, and facilitated sales, between contractors and manufacturers for building
                  materials. Utilized resources and customer service skills to meet the rapid and urgent customer needs of the
                  building industry.
          </li>
              </ul>
            </dd>

            <dt class="col-sm-4"><strong>Lewis & Clark College</strong><em style="font-size: 15px">-Portland, OR </em><br />
              <small>2012-2015</small></dt>
            <dd class="col-sm-8">
              <p>Tutor</p>
              <ul>
                <li>
                  Learned varied teaching techniques as a tutor in physics, mathematics, Spanish and French to college
                  students at the college’s Symbolic and Quantitative Resource Center and through the Student Academic Affairs
                  Board.
          </li>
              </ul>
            </dd>

            <dt class="col-sm-4"><strong>College Outdoors</strong><em style="font-size: 15px">-Portland, OR
        </em><br /><small>2012-2015</small></dt>
            <dd class="col-sm-8">
              <p>Raft Guide/Outdoor Educator and Warehouse Staff</p>
              <ul>
                <li>
                  Gained leadership experience and group management skills as a guide and educator, taking students on
                  multi-day rafting, surfing and yoga trips, teaching participants skills in raft guiding, outdoor
                  survival/safety, teamwork and communication.
          </li>
              </ul>
            </dd>
            <dt class="col-sm-4"><strong>West Bend Property Compay</strong><em style="font-size: 15px">-Bend, OR
        </em><br /><small>2012-2014</small></dt>
            <dd class="col-sm-8">
              <p>Front Dest/ Reception</p>
              <ul>
                <li>
                  Practiced organizational and mediation skills as the front desk and office assistant for a property
                  management firm. Learned many general office skills as well as WordPress.
          </li>
              </ul>
            </dd>
          </dl>
      <div class="row">
        <br />
        <div class="col-sm-7">
          <h3><u>EDUCATION</u></h3>
          <h5><strong>Bachelor's of Arts in Physics</strong><br /><small>Lewis & Clark College</small><br /><em
            style="font-size: 15px">Portland, OR
            2011-2015</em>
          </h5>
          <ul style="list-style: none">
            <li>Graduated summa cum laude with a 3.914 GPA</li>
            <li>Member of the Phi Beta Kappa society</li>
            <li>Minor in Mathematics</li>
          </ul>
          <h5><strong>Montana Code School</strong><em style="font-size: 15px"><br />Bozeman, MT 2019</em></h5>
          <ul style="list-style: none">
            <li>Learned basics of software development including:
              JavaScript, CSS, HTML, Bootstrap React, MySQL...
          </li>

          </ul>
          <h5><strong>EuroCentres</strong><br /><em style="font-size: 15px">Lausanne, Switzerland 2010-2011</em></h5>
          <ul style="list-style: none">
            <li>Certificate of Advanced verbal and written skills in French</li>
          </ul>

        </div>
        <div class="card border-dark text-center mx-auto">
          <div class="card-header" style="font-size: 18px; background-color: rgb(175, 174, 173)">
            REFERENCES
        </div>
          <div class="card-body j">

            <div class="dropdown">
              <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                style="background-color: rgb(221, 220, 220); color: black">
                <u>Jeff Clark</u> <br /> Lone Mountain Sports
            </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="tel:+14065702469" target="_blank"> (406)570-2469</a>
              </div>
            </div>

            <br />

            <div class="dropdown">
              <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                style="background-color: rgb(221, 220, 220); color:black">
                <u>Gavin Cooper</u> <br /> Montana Whitewater
            </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="tel:+19374709784" target="_blank"> (937)470-9784</a>
              </div>
            </div>

            <br />

            <div class="dropdown">
              <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                style="background-color: rgb(221, 220, 220); color:black">
                <u>Micheal Broide</u><br />Physics Professor
            </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="tel:+15037687581" target="_blank"> (503)768-7581</a><br />
                <a class="dropdown-item" href="mailto:broide@lclark.edu" target="_blank"> broide@lclark.edu</a>
              </div>
            </div>

            <br />

            <div class="dropdown">
              <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                style="background-color: rgb(221, 220, 220); color:black">
                <u>Thom Lehman</u> <br /> College Outdoors
            </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="tel:+15037686287" target="_blank">(503)768-6287</a><br />
                <a class="dropdown-item" href="mailto:tml@lclark.edu" target="_blank">tml@lclark.edu</a>
              </div>
            </div>
            <br />
            <div class="dropdown">
              <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                style="background-color: rgb(221, 220, 220); color:black">
                <u>Christi Haynes</u> <br /> West Bend Property Company
            </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="tel:+15037686287" target="_blank">(541)383-4360</a><br />
                <a class="dropdown-item" href="mailto:christi@northwestcrossing.com" target="_blank">christi@northwestcrossing.com</a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <br />
      <div class="row justify-content-center">
        <div class="col-6">
          <h3><u>GENERAL STRENGTHS</u></h3>
          <ul>
            <li>Conversationally fluent in Spanish and French</li>
            <li>Customer service</li>
            <li>Teamwork</li>
            <li>Leadership</li>
            <li>Highly organized</li>
            <li>Time management</li>
            <li>Reliability</li>
            <li>Written and oral communication</li>
            <li>A positive, go-getter attitude</li>
            <li>First Aid and CPR certified</li>
          </ul>
        </div>

        <div class="col-6">
          <h3><u>TECHNICAL SKILLS</u></h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML/CSS</li>
            <li>Bootstrap</li>
            <li>Microsoft Excel</li>
            <li>Microsoft PowerPoint</li>
            <li>Microsoft Word</li>
            <li>WordPress</li>
            <li>Google Drive functionalities</li>
          </ul>
        </div>
      </div>
   
    </section >
</Container >
 
    )
  }
}
export default Resume