import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const Nav = ({ libraryStatus, setLibraryStatus,isPlaying,
	setCurrentSong,
	songEndHandler,
	audioRef,
	songInfo,
	setSongInfo,
	songs,
	setSongs }) => {
	
const [searchInput, setSearchInput] = React.useState("");
const search = () => {
    if (searchInput.length > 2 && searchInput.charAt(0) !== " ") {
		if(searchInput.toLowerCase() === "europa"||
			searchInput.toLowerCase() === "deli"||
			searchInput.toLowerCase() === "clair de lune"||
			searchInput.toLowerCase() === "çok yorgunum"||
			searchInput.toLowerCase() === "ben böyleyim"||
			searchInput.toLowerCase() === "the wolven storm"||
			searchInput.toLowerCase() === "moonlight sonata first movement"||
			searchInput.toLowerCase() === "sari galin"||
			searchInput.toLowerCase() === "alla beni pulla beni"||
			searchInput.toLowerCase() === "ey büti nev eda"||
			searchInput.toLowerCase() === "cambaz"){
				alert(`The song: ${searchInput} is already at your library`)
				
		}
		else{
			alert("We are sorry.This song is currently unavaliable.")
		}	
}
	
  else{
	alert("Please enter a valid song name.")
  }
}
	return ( 
		<NavContainer>
			<H1 libraryStatus={libraryStatus}>Now playing</H1>
			<form action="/" method="get">
				<label htmlFor="header-search">
					<span className="visually-hidden"></span>
				</label>
				<input
					value={searchInput}
					onChange={(event) => setSearchInput(event.target.value)}
					className="form-control"
					type="text"
					aria-label="Search"
					id="header-search"
					placeholder="Search"
					name="s"
				/>
			</form>
			<Button2 onClick={search} >
				search
			</Button2>
			<Button onClick={() => setLibraryStatus(!libraryStatus)}>
				Library
				<FontAwesomeIcon icon={faMusic} />
			</Button>
		</NavContainer>
	);
};

const NavContainer = styled.div`
	min-height: 10vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media screen and (max-width: 768px) {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
	}
`;

const H1 = styled.h1`
	transition: all 0.5s ease;

	@media screen and (max-width: 768px) {
		visibility: ${(p) => (p.libraryStatus ? "hidden" : "visible")};
		opacity: ${(p) => (p.libraryStatus ? "0" : "100")};
		transition: all 0.5s ease;
	}
`;

const Button = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	border: 2px solid rgb(65, 65, 65);
	padding: 0.5rem;
	transition: all 0.3s ease;
	&:hover {
		background: rgb(65, 65, 65);
		color: white;
	}
`;



const Button2 = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	border: 2px solid rgb(65, 65, 65);
	padding: 0.5rem;
	transition: all 0.3s ease;
	&:hover {
		background: rgb(65, 65, 65);
		color: white;
	}
`;


export default Nav;
