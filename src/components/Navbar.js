import React, { Component } from 'react'
import { Box, Text, Heading, Image } from 'gestalt'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
    return(
        <Box
            display="flex"
            alignItems="center"
            justifyContent="around"
            height={70}
            color="midnight"
            padding={1}
        >

            {/* signin link */}
            <NavLink to="/signin">
                <Text size="xl" color="white">Sign In</Text>
            </NavLink>

            {/* logo & title */}
            <NavLink to="/">
                <Box height={50} width={50}>
                    <Image
                        alt="Kevin Boyle Art"
                        naturalHeight={1}
                        naturalWidth={1}
                        src="./logo.svg"
                    />
                </Box>
                <Heading size="sx" color="orange">
                    Kevin Boyle Art
                </Heading>
            </NavLink>





            {/* signup link */}
            <NavLink to="/signup">
                <Text size="xl" color="white">Sign In</Text>
            </NavLink>


        </Box>
    )
}

export default Navbar;