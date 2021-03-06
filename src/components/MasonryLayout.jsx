import React from 'react';
import PropTypes from 'prop-types';

const MasonryLayout = (props) => {
  const columnWrapper = {};
  const result = [];

  for (let i = 0; i < props.children.length; i += 1) {
    const columnIndex = i % props.columns;
    columnWrapper[`column${columnIndex}`].push(
      <div style={{ marginBottom: `${props.gap}px` }}>
        {props.children[i]}
      </div>,
    );
  }

  for (let i = 0; i < props.columns; i += 1) {
    result.push(
      <div
        style={{
          marginLeft: `${i > 0 ? props.gap : 0}px`,
          flex: 1,
        }}
      >
        {columnWrapper[`column${i}`]}
      </div>,
    );
  }

  return (
    <div style={{ display: 'flex' }}>
      {result}
    </div>
  );
};

MasonryLayout.propTypes = {
  columns: PropTypes.number.isRequired,
  gap: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

MasonryLayout.defaultProps = {
  gap: 20,
};

export default MasonryLayout;
