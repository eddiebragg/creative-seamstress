"use client";

import { Card, CardBody, Typography } from "@material-tailwind/react";
import { HomeIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

function Contact() {
    return (
        <section className="py-2 px-8 lg:py-10" id="contact">
            <div className="mx-auto container">
                <div className="container text-center">
                    <Typography
                        variant="h2" color="blue-gray" className="mb-4 font-medium">
                        Contact
                    </Typography>
                    <Typography className="mb-12 md:w-8/12 font-medium">
                        Please contact me
                    </Typography>
                    <div className="flex flex-col md:flex-row px-10">
                        <Card
                            color="transparent"
                            shadow={false}
                            className="flex-auto items-center">
                            <CardBody>
                                <HomeIcon className="h-10 w-10 text-primary" />
                                <Typography className="mb-12 md:w-8/12 pt-10 font-medium">
                                    12 Brandize Park,
                                    Okehampton,
                                    Devon.
                                    EX20 1EQ
                                </Typography>
                            </CardBody>
                        </Card>    
                        <Card
                            color="transparent"
                            shadow={false}
                            className="flex-auto items-center">
                            <CardBody>
                                <EnvelopeIcon className="h-10 w-10 text-primary" />
                                <Typography className="mb-12 md:w-8/12 pt-10 font-medium">
                                    info@createiveseamstress.co.uk
                                </Typography>
                            </CardBody>
                        </Card>   
                        <Card
                            color="transparent"
                            shadow={false}
                            className="flex-auto items-center">
                            <CardBody>
                                <PhoneIcon className="h-10 w-10 text-primary" />
                                <Typography className="mb-12 md:w-8/12 pt-10 font-medium">
                                    07590636466
                                </Typography>
                                
                            </CardBody>
                        </Card>
                    </div>           
                </div>
            </div>
        </section>

    ); 
}

export default Contact;