import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

import styled from "styled-components"

export const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  position: relative;
`

export const Overlay = styled.div`
.top {
        top: 0;
    }
   & .bottom {
        bottom: 0;
    }
    section {
        
        margin: 16px;
        position: absolute;
        left: 0;
        div {
            padding: 16px 24px;
            background: black;
            color: white;
            line-height: 1.618;
            max-width: calc(100vw - 32px)
        }
        @media screen and (min-width: 501px) {
            margin: 24px;
        }
        @media screen and (min-width: 901px) {
            margin: 32px;
    }
   
    
`


const IndexPage = () => (
    <Layout>
        <Container>
            <SEO title="𓆉𓆉𓆉" keywords={[`turtles`, `wwf`]} />

            <div style={{ width: '100%', maxWidth: "100vw", height: '100vh', }}>
                <img alt="turtles" style={{ width: '100%', maxWidth: "100vw", height: '100vh', objectFit: 'cover', margin: '0' }} src="https://source.unsplash.com/collection/11355299" />
            </div>
            <Overlay >
                <section className="top">
                    <div>
                        𓆉𓆉𓆉
                    </div>
                </section>
                <section className="bottom">
                    <div>
                        <b>Learn About Sea Turtles:</b> <i><a href="https://www.worldwildlife.org/species/sea-turtle">https://www.worldwildlife.org/species/sea-turtle</a></i>
                        <br />
                        <b>Adopt a Sea Turtle:</b> <i><a href="https://gifts.worldwildlife.org/gift-center/gifts/Species-Adoptions/Sea-Turtle">https://gifts.worldwildlife.org/gift-center/gifts/Species-Adoptions/Sea-Turtle</a></i>
                    </div>
                </section>
            </Overlay>
        </Container>
    </Layout>
)

export default IndexPage
