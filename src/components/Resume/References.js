import React from 'react';
import { Col, Row, Container, ListGroup, Dropdown, ListGroupItem } from 'react-bootstrap'

class References extends React.Component {

  render() {
    return (
      <Container>
        <h3><u>REFERENCES</u></h3>


        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            <u>Jeff Clark</u> <br /> Lone Mountain Sports
              </Dropdown.Toggle>
          <Dropdown.Menu>

            <Dropdown.Item href="tel:+14065702469" target="_blank"> (406)570-2469</Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>

        <br />

        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            <u>Gavin Cooper</u> <br /> Montana Whitewater
            </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="tel:+19374709784" target="_blank"> (937)470-9784</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <br />

        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            <u>Micheal Broide</u><br />Physics Professor
            </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="tel:+15037687581" target="_blank"> (503)768-7581</Dropdown.Item><br />
            <Dropdown.Item href="mailto:broide@lclark.edu" target="_blank"> broide@lclark.edu</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <br />

        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            <u>Thom Lehman</u> <br /> College Outdoors
            </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="tel:+15037686287" target="_blank">(503)768-6287</Dropdown.Item><br />
            <Dropdown.Item href="mailto:tml@lclark.edu" target="_blank">tml@lclark.edu</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <br />
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            <u>Christi Haynes</u> <br /> West Bend Property Company
            </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="tel:+15037686287" target="_blank">(541)383-4360</Dropdown.Item><br />
            <Dropdown.Item href="mailto:christi@northwestcrossing.com" target="_blank">christi@northwestcrossing.com</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    )
  }

}
export default References