import MyProjects from '../assets/data.json'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Projects() {
    return (
        <section>
            <h2>Made by: {MyProjects.user}</h2>
            {MyProjects.Utbildningar.map(proj => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item variant="danger">
                                <article key={proj.name}>
                                    <Card.Header>
                                        <h3>Project name: {proj.name}</h3>
                                    </Card.Header>
                                    <p>{proj.description}</p>
                                    <ProgressBar animated now={proj.progress} variant="danger" />
                                </article>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                )
            })
            }
        </section>
    )
}