import React, {Component} from "react";
import { Container, Row, Col} from "react-bootstrap";
import {MangaCard} from "../components/Cards";
import manga from "../data.json";

export default class Home extends Component {
    render() {
        return(
            <Container>
                <Row>
                    {manga.map(data =>(
                        <Col xs={3} className="mb-5" key={'${data.id}'}>
                            <MangaCard data={data}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
}