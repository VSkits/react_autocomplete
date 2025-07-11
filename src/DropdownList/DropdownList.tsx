import React from 'react';
import { Person } from '../types/Person';
import 'bulma/css/bulma.css';

type Props = {
  personList: Person[];
};

export const DropdownList: React.FC<Props> = ({ personList }) => (
  <div className="dropdown-menu" role="menu" data-cy="suggestions-list">
    <div className="dropdown-content">
      {personList.map(person => (
        <div
          className="dropdown-item"
          data-cy="suggestion-item"
          key={person.slug}
        >
          <p className="has-text-link">{person.name}</p>
        </div>
      ))}
    </div>
  </div>
);
