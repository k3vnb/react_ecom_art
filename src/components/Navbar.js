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
            <NavLink activeClassName="active" to="/signin">
                <Text size="xl" color="white">Sign In</Text>
            </NavLink>

            {/* logo & title */}
            <NavLink activeClassName="active" exact to="/">
                <Box display="flex" alignItems="center">
                    <Box height={35} width={50}>
                        <Image
                            alt="Kevin Boyle Art"
                            naturalHeight={1}
                            naturalWidth={1}
                            marginRight={2}
                            src="./logo.svg"
                        />
                    </Box>
                    <Heading size="sx" color="orange">
                        Kevin Boyle <br /> Art
                    </Heading>
                </Box>
            </NavLink>





            {/* signup link */}
            <NavLink activeClassName="active" to="/signup">
                <Text size="xl" color="white">Sign Up</Text>
            </NavLink>


        </Box>
    )
}

export default Navbar;