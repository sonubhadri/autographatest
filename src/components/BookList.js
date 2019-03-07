import React from "react";

class BookList extends React.Component {
  render() {
    return (
      <select>
        {this.props.books.map(book => (
          <option>{book}</option>
        ))}
      </select>
    );
  }
}
export default BookList;
