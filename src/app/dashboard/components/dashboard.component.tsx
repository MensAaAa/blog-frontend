import React, { useEffect } from 'react';
import { Container, Table } from 'reactstrap';

import CustomButtom from '../../shared/form/components/custom-button.component';
import { Post } from '../../../core/redux/posts/posts.interface';

import '../styles/dashboard.styles.scss';

interface PropsType {
  fetchPosts: () => void;
  posts: Post[];
}

const DashboardComponent = (props: PropsType) => {
  useEffect(() => {
    props.fetchPosts();
  }, [])


  return (
    <div className="dashboard d-flex flex-column flex-wrap align-center">
      <Container>
        <div className="add-post mb-4">
          <CustomButtom name="Add post" redirectUrl="/add-post" customClass="submit" />
        </div>
        {props.posts &&
          <Table>
            <thead>
              <tr>
                <th>Naslov</th>
                <th>Sadrzaj</th>
                <th>Putanja</th>
                <th>Pregleda</th>
                <th>Kreiran</th>
              </tr>
            </thead>
            <tbody>
              {props.posts.map((post: Post) => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.content}</td>
                  <td>{post.path}</td>
                  <td>{post.views}</td>
                  <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        }
      </Container>
    </div>
  )
}

export default DashboardComponent;