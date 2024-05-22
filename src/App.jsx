import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikePostHoc from './components/Using Hoc/LikePostHoc';
import LikeImageHoc from './components/Using Hoc/LikeImageHoc';
import LikePostRender from './components/Using props/LikePostRender';
import LikeImageRender from './components/Using props/LikeImageRender';

function App() {
  return (
    <div>
      <div className='buttons'>
        {/* <h1>Blogs post using HOC</h1>
          <LikePostHoc/>
          <LikeImageHoc/> */}

        {/* <h1>Using code duplicity</h1>
          <LikePost/>
          <LikeImage/> */}

        <h1>Blogs Post using Render Props</h1>
          <LikePostRender/>
          <LikeImageRender/>
      </div>
    </div>
  );
}

export default App;
