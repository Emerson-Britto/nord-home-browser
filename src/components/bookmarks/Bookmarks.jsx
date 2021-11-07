import React from 'react';
import Styled from 'styled-components';

import { bookmarkIcon } from 'api/istatic';

import { useBookmarksContext } from 'common/contexts/bookmarks';

import add from 'assets/icons/add_white_24dp.svg'
import edit from 'assets/icons/edit_white_24dp.svg'


const BookmarksWrapper = Styled.section`
	//styles..
`

const BookmarksList = Styled.ul`
	color: ${({ theme }) => theme.text};
`

const Bookmark = Styled.li`
	display: flex;
	align-Items: center;
	width: 230px;
	height: 50px;
	margin: 10px 0;
	border-radius: 7px;
	transition: 400ms;

	:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.hover};		
		box-shadow: 0px 0px 30px rgb(0 0 0 / 15%);
	}

	:hover .editBookmark {
		display: inline-block;
	}
`

const Icon = Styled.div`
	background: url(${(props) => (props.url)}) no-repeat center/65% #fff;
	width: 38px;
	height: 38px;
	border-radius: 12px;
	margin: 0 15px 0 0;
`

const BookmarkName = Styled.h3`
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	width: 60%;
	overflow: hidden;
	text-overflow: ellipsis;
`

const EditBookmark = Styled.section`
	display: none;
	background: url(${edit}) no-repeat center/50%;
	width: 40px;
	height: 40px;
	border-radius: 8px;
	filter: ${({ theme }) => theme.filter};

	:hover {
		background-color: rgb(255 255 255 /10%);
	}
`

const AddBookmark = Styled.section`
	width: 230px;
	height: 50px;
	margin: 10px 0;
	border-radius: 7px;
	background: url(${add}) no-repeat center;
	transition: 500ms;
	filter: ${({ theme }) => theme.filter};

	:hover {
		cursor: pointer;
		background-color: rgb(255 255 255 / 3%);
	}
`

const BookmarkMakerWrapper = Styled.section`
	position: absolute;
	display: ${(props) => (props.show ? "" : "none")};
	z-index: 10;
	width: 100vw;
	height: 100vh;
	left: 0;
	bottom: 0;
	background-color: rgb(0 0 0 / 80%);
`

const BookmarkMaker = Styled.section`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-Items: center;
	width: 32vw;
	height: 35vh;
	left: 35vw;
	bottom: 5vh;
	border-radius: 14px;
	background-color: #060814;
`

const BookmarkMakerIcon = Styled.div`
	position: absolute;
	top: -60px;
	left: 170px;
	width: 90px;
	height: 90px;
	background: url(${(props) => (props.url)}) no-repeat center/50%;
	background-color: #fff;
	border-radius: 13px;
`

const Input = Styled.input`
	border: none;
	background-color: rgb(0 0 0 /30%);
	border-bottom: 2px solid #27282A;
	border-radius: 9px 0 9px 0;
	width: 75%;
	height: 25px;
	padding: 5px 10px;
	color: #fff;
	outline: none;
	margin: 10px 0;
	transition: 400ms;

	:focus {
		border-bottom: 2px solid #575458;
	}
`

const AddBtn = Styled.button`
	border: none;
	background-color: #182972;
	font-size: 1em;
	border-radius: 7px;
	padding: 8px 30px;
	cursor: pointer;
	color: #fff;
	margin: 10px 0 25px 10px;
	transition: 400ms;

	:hover {
		background-color: #1829C1;
	}
`

const RemoveBtn = Styled.button`
	border: none;
	background-color: #910000;
	font-size: 1em;
	border-radius: 7px;
	padding: 8px 30px;
	cursor: pointer;
	color: #fff;
	margin: 10px 0 25px 10px;
	transition: 400ms;

	:hover {
		background-color: #BF0000;
	}
`


//edit_white_24dp.svg

const Bookmarks = () => {

	const {
		openNewTab,
		startEdit,
		setShowBookmarkMaker,
		closeBookmarkMaker,
		incrementHttp,
		setNameInput,
		setUrlInput,
		AddBookmarkToList,
		removeBookmark,
		bookmarks,
		showBookmarkMaker,
		urlInput,
		nameInput,
		editMode
	} = useBookmarksContext();


	return (
		<BookmarksWrapper>
			<BookmarksList>
				{bookmarks.map((bookmark, i) => {
					return (
						<Bookmark key={i} onClick={()=> openNewTab(bookmark)}>
							<Icon url={bookmarkIcon(bookmark.url.split('/')[2])}/>
							<BookmarkName>{bookmark.name}</BookmarkName>
							<EditBookmark 
								className='editBookmark'
								onClick={e=> startEdit(e, bookmark, i)}/>
						</Bookmark>
					)
				})}
				{bookmarks.length < 5 && <AddBookmark onClick={()=> setShowBookmarkMaker(true)}/>}
			</BookmarksList>
			<BookmarkMakerWrapper show={showBookmarkMaker} onClick={()=> closeBookmarkMaker()}>
				<BookmarkMaker onClick={e=> e.stopPropagation()}>
					<BookmarkMakerIcon url={()=> bookmarkIcon(incrementHttp(urlInput).split('/')[2])}/>
					<Input 
						type='text'
						value={nameInput}
						onChange={e=> setNameInput(e.target.value)}
						placeholder='Name'/>
					<Input 
						type='text'
						value={urlInput}
						onChange={e=> setUrlInput(e.target.value)}
						placeholder='Url'/>
					<section>
						<AddBtn onClick={()=> AddBookmarkToList()}>{editMode ? 'Close' : 'Add'}</AddBtn>						
						{editMode && <RemoveBtn onClick={()=> removeBookmark()}>Remove</RemoveBtn>}						
					</section>
				</BookmarkMaker>				
			</BookmarkMakerWrapper>
		</BookmarksWrapper>
	);
}

export default Bookmarks;
