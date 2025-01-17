import React, { useState } from "react";
import styled, { isStyledComponent } from 'styled-components';

// Components
import CardAuthor from '../../../components/blog/cardAuthor';
import Layout from '../../../components/Layouts'

// styles
const Container = styled.section`	
	margin-top: -6rem;
`;

const BoxTitle = styled.div `
	margin-left: 6rem;
`;

const Date = styled.p `
	color: #FFAC2D;
	font-size: 14px;
	padding: 1rem 3.35rem;
`;

const Title = styled.h2 `
	font-size: 40px;
	color: #FDE7A9;
	display: flex;
	width: 75%;
`;

const DetailsTitle = styled.p `
	font-size: 40px;
	color: #FF611E;
	margin-right: 1rem;
`;

const SubTitle = styled.p `
	font-size: 36px;
	font-weight: 100;
	width: 69%;
    padding: 1rem 4rem;
`;

const ContainerMain = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 3rem;
`;

const Index = () => {
	const hasWindow = typeof window !== 'undefined';
	const data = hasWindow && window.history;
	const isData = data?.state?.postBlog;
	const isTitle = {
		date: isData?.publishedAt,
		title: isData?.title,
		excerpt: isData?.excerpt,
	}

	return (
		<Layout pageTitle={isTitle}>
			<Container>
				{/* <BoxTitle>
					<Date>{data?.state?.postBlog?.publishedAt}</Date>
					<Title>
						<DetailsTitle>//</DetailsTitle> 
						{data?.state?.postBlog?.title}
					</Title>
					<SubTitle>{data?.state?.postBlog?.excerpt}</SubTitle>
				</BoxTitle> */}
				<ContainerMain>
					<article class="Test" dangerouslySetInnerHTML={{ __html: data?.state?.postBlog?.content.html }}></article>		
				</ContainerMain>
				<CardAuthor author={data?.state?.postBlog?.authors[0]}/> 
			</Container>
		</Layout>
	)
}

export default Index;


// o titulo da header não esta em development
// alterar a class test para pegar os dados pelo isStyledComponent
// chamar o component pageTest
// 