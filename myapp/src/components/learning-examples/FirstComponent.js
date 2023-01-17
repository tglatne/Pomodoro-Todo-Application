import React from 'react';
//Function Component
function FirstComponent() {
    return (
      <div className="firstComponent">
        First function component
      </div>
    );
  }

export default FirstComponent;

  //Learnings - The First Component is the default export while the second component is not default. Hence when importing the second 
  // component in the react App, you have to use '{} - braces'