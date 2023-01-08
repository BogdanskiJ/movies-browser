import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import { MovieDetail, MovieRating, MovieTags, MovieTitle, MovieYear, Poster, Rating, Tag, VotesNumber } from "./styled";
import poster from "../../../images/poster.png"
import { ReactComponent as Star } from '../../../images/star.svg'

export const Movie = () => (
    <>
        <MovieDetail theme={theme}>
            <div>
                <Poster src={poster} alt="" />
            </div>
            <div>
                <MovieTitle>
                    Mulan
                </MovieTitle>
                <MovieYear>
                    2020
                </MovieYear>
                <MovieTags>
                    <Tag>dasda</Tag>
                    <Tag>ddaa</Tag>
                    <Tag>dadasdasa</Tag>
                    <Tag>dasdasda</Tag>
                </MovieTags>
                <MovieRating>
                    <Star />
                    <Rating>7,5</Rating>
                    <VotesNumber>35 votes</VotesNumber>
                </MovieRating>
            </div>
        </MovieDetail>


    </>



);