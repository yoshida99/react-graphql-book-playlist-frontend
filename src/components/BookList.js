import React, { Component } from 'react'
import { getBooksQuery } from '../queries/queries'
import { graphql } from 'react-apollo';



class BookList extends Component {
 displayBooks() {
  let data = this.props.data;
  if (data.loading) {
   return (<div>loading books....</div>)
  } else {
   return data.books.map(book => (<li key={book.id}>{book.name}</li>))
  }
 }
 render() {
  //console.log(this.props)
  return (
   <div >
    <ul id="book-list">
     {this.displayBooks()}
    </ul>
   </div>
  )
 }
}

export default graphql(getBooksQuery)(BookList)