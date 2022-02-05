import React from 'react';
import { Button, Dropdown, Form } from 'react-bootstrap';
import './NewShow.css';
import { useState } from 'react';

const NewShow = () => {
    const [showData, setShowData] = useState('Movie');
    const [showDataObject, setShowDataObject] = useState({});

    const handleNewShow = e => {
        e.preventDefault();
        showDataObject['type'] = showData;
        console.log(showDataObject);
        fetch('http://localhost:5000/addshow',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(showDataObject)
        })
        .then()
    }

    const handleNewShowData = e => {
        console.log('clicked')
        const keyfield = e.target.name;
        const value = e.target.value;
        const newdata = {...showDataObject};
        newdata[keyfield] = value;
        setShowDataObject(newdata);
    }

    return (
        <div className="add_show_main">
            <div className="show_type_holder">
                <div>
                    <h4>Please Select The Type</h4>
                </div>
                <Dropdown style={{marginLeft:'20px'}}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        { showData?showData:'Select Show'}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={ () => setShowData('Movie')}>Movie</Dropdown.Item>
                        <Dropdown.Item onClick={ () => setShowData('TV Series')}>TV Series</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="main_show_info_section">
                <Form onSubmit={handleNewShow} className="form_style_custome">
                    <div className="show_info_style">
                        <br />
                            <Form.Group onBlur={handleNewShowData} className="mb-3">
                                <Form.Label>Show Name</Form.Label>
                                <Form.Control name="show" type="text" placeholder="Enter Show Name" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group onBlur={handleNewShowData} className="mb-3">
                                <Form.Label>Director</Form.Label>
                                <Form.Control name="director" type="text" placeholder="Director Name" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Check type="checkbox" label="Top This Week?" />
                            </Form.Group>

                            <Form.Group onBlur={handleNewShowData} className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>About The Show</Form.Label>
                                <Form.Control name="des" as="textarea" rows={3} />
                            </Form.Group>

                            <Form.Group onBlur={handleNewShowData} className="mb-3">
                                <Form.Label>Show URL</Form.Label>
                                <Form.Control name="url" type="text" placeholder="Main URL" />
                            </Form.Group>
                            
                            <Form.Group onBlur={handleNewShowData} className="mb-3">
                                <Form.Label>Thumbnail Image</Form.Label>
                                <Form.Control name="img" type="text" placeholder="Thumbnail Image Link" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                    </div>
                    <div className="show_info_style">
                        <br />
                            <Form.Group onBlur={handleNewShowData} className="mb-3">
                                <Form.Label>Cover Image Link</Form.Label>
                                <Form.Control name="cover_img" type="text" placeholder="Enter Cover Image Link" />
                                <Form.Text className="text-muted">
                                The Main Big Image
                                </Form.Text>
                            </Form.Group>

                            <Form.Group onBlur={handleNewShowData} className="mb-3">
                                <Form.Label>First Sub Image</Form.Label>
                                <Form.Control name="sub_img_one" type="text" placeholder="Image Link" />
                            </Form.Group>

                            <Form.Group onBlur={handleNewShowData} className="mb-3">
                                <Form.Label>Second Sub Image</Form.Label>
                                <Form.Control name="sub_img_two" type="text" placeholder="Image Link" />
                            </Form.Group>

                            <Form.Group onBlur={handleNewShowData} className="mb-3">
                                <Form.Label>Third Sub Image</Form.Label>
                                <Form.Control name="sub_img_three" type="text" placeholder="Image Link" />
                            </Form.Group>

                            <div className="other_info_style">
                                <Form.Group onBlur={handleNewShowData} className="mb-3">
                                    <Form.Label>Genere (Case sensitive)</Form.Label>
                                    <Form.Control name="genere" type="text" placeholder="Genere" />
                                </Form.Group>

                                <Form.Group onBlur={handleNewShowData} className="mb-3">
                                    <Form.Label>Video Length</Form.Label>
                                    <Form.Control name="time" type="text" placeholder="Video Duration" />
                                </Form.Group>

                                <Form.Group onBlur={handleNewShowData} className="mb-3">
                                    <Form.Label>Cost</Form.Label>
                                    <Form.Control name="cost" type="text" placeholder="Cost" />
                                </Form.Group>
                            </div>

                            <div className="other_info_style">
                                <Form.Group onBlur={handleNewShowData} className="mb-3">
                                    <Form.Label>Total View</Form.Label>
                                    <Form.Control name="view" type="text" placeholder="View" />
                                </Form.Group>

                                <Form.Group onBlur={handleNewShowData} className="mb-3">
                                    <Form.Label>Ratings</Form.Label>
                                    <Form.Control name="ratings" type="text" placeholder="Total Ratings" />
                                </Form.Group>

                                <Form.Group onBlur={handleNewShowData} className="mb-3">
                                    <Form.Label>Release</Form.Label>
                                    <Form.Control name="release" type="text" placeholder="Release Year" />
                                </Form.Group>
                            </div>
                    </div>
                    <br />
                </Form>
            </div>
        </div>
    );
};

export default NewShow;