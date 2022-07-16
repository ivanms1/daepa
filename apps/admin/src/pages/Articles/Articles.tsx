import { useQueryArticlesAdminQuery } from 'apollo-hooks';
import React from 'react';

function Articles() {
  const {} = useQueryArticlesAdminQuery();

  return <div>Articles</div>;
}

export default Articles;
