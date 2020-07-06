import React from "react"

import Layout from "../components/layout"

import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <Container>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

            <div style={{ width: '100%', maxWidth: "100vw", height: '100vh', }}>
                <img alt="turtles" style={{ width: '100%', maxWidth: "100vw", height: '100vh', objectFit: 'cover', margin: '0' }} src="https://source.unsplash.com/featured/2000?sea+turtle" />
            </div>

        </Container>
    </Layout>
)

export default IndexPage
