import React, { createContext, useContext, useState, useEffect } from 'react';

import { Storage } from 'common/storage';

export const BookmarksContext = createContext();
BookmarksContext.displayName = 'Bookmarks';

export default function BookmarksProvider({ children }){
	
	const [showBookmarkMaker, setShowBookmarkMaker] = useState(false);
	const [nameInput, setNameInput] = useState('');
	const [urlInput, setUrlInput] = useState('');

	const [editMode, setEditMode] = useState(false);
	const [editIndex, setEditIndex] = useState(null);

	const [bookmarks , setBookmarks] = useState([]);


	return (
		<BookmarksContext.Provider value={{
			showBookmarkMaker,
			setShowBookmarkMaker,
			editMode,
			setEditMode,
			editIndex,
			setEditIndex,
			nameInput,
			setNameInput,
			urlInput,
			setUrlInput,
			bookmarks,
			setBookmarks
		}}>
			{ children }
		</BookmarksContext.Provider>
	)
}

export function useBookmarksContext(){

	const {
		showBookmarkMaker,
		setShowBookmarkMaker,
		editMode,
		setEditMode,
		editIndex,
		setEditIndex,
		nameInput,
		setNameInput,
		urlInput,
		setUrlInput,
		bookmarks,
		setBookmarks
	} = useContext(BookmarksContext);


// =============================================================


	const openNewTab = bookmark => {
		window.open(bookmark.url, '_blank');
	};

	const closeBookmarkMaker = () => {
		setShowBookmarkMaker(false);
		setEditMode(false);
		setNameInput('');
		setUrlInput('');
	};

	const AddBookmarkToList = () => {
		if(editMode){
			const listPrint = [...bookmarks];
			listPrint[editIndex] = {name: nameInput, url: incrementHttp(urlInput)};
			setBookmarks(listPrint);
			closeBookmarkMaker();
			Storage.set('bookmarks', listPrint);
			return
		}

		if(nameInput.length && urlInput.length){
			let listFiltered = bookmarks.filter(bookmark=> bookmark.name !== nameInput);
			let newList = [...listFiltered, {name: nameInput, url: incrementHttp(urlInput)}];
			setBookmarks(newList);
			closeBookmarkMaker();
			Storage.set('bookmarks', newList);
		}
	};

	const removeBookmark = () => {
		let newlist = bookmarks.filter(bookmark=> bookmark.name !== nameInput);
		setBookmarks([...newlist]);
		closeBookmarkMaker();
		Storage.set('bookmarks', newlist);
	};

	const startEdit = (e, bookmark, index) => {
		e.stopPropagation();
		setEditMode(true);
		setEditIndex(index);
		setNameInput(bookmark.name);
		setUrlInput(bookmark.url);
		setShowBookmarkMaker(true);
	};

	const incrementHttp = url => {
		if(url.startsWith('https://') || url.startsWith('http://')){
			return url;
		}
		return 'https://' + url;
	};

	useEffect(()=>{
	    if(Storage.get('bookmarks')){
	    	setBookmarks(Storage.get('bookmarks'))
	    } else {
	    	setBookmarks([]);
	    }
	
	},[])


	return {
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
	}
}