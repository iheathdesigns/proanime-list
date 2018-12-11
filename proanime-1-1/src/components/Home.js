import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';


export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>The Ultimate Anime Movie Site</h2>
                    <p>Made with React and caffeine</p>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={12} className="main-wrapper">
                    <h3>Welcome to your imagination</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et eros egestas erat cursus imperdiet. Praesent metus metus, tempor nec odio eget, pretium facilisis mi. Vivamus facilisis dui et viverra elementum. Praesent ut pellentesque tortor. Sed eleifend tellus magna, at eleifend mauris faucibus eu. Integer tristique vehicula porta. Donec maximus ultrices neque nec volutpat. Sed eleifend gravida dolor non imperdiet. Suspendisse eget ligula suscipit, lacinia velit quis, viverra justo. Praesent vitae tristique eros. Etiam et velit sem. Etiam tincidunt vulputate turpis, non convallis erat ultricies ut. Etiam sit amet volutpat ipsum.

Praesent et posuere sem, vitae elementum mauris. Quisque id nisl porttitor magna viverra sodales. Donec vel tincidunt sapien. In ante orci, gravida at sodales non, vulputate id dolor. Donec a porta nisl, non posuere nibh. Suspendisse quis pulvinar mauris, vitae efficitur libero. Aliquam sed porta velit. Nulla condimentum convallis nibh, ac congue risus egestas sit amet. In ac felis et lacus finibus bibendum ut at nibh. Proin nec orci ante. Proin dui dolor, sodales eget varius nec, pharetra lobortis eros. Integer et ligula sit amet risus ullamcorper aliquet. Vestibulum posuere venenatis ex. Nulla arcu justo, tristique et egestas nec, imperdiet in ex.</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
