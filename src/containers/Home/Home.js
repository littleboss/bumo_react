import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {load as loadPainting} from 'redux/modules/models/Painting';
import {Link} from 'react-router';
import './Home.scss';
import Waypoint from 'react-waypoint';


const resize = (url, minWidth)=>{
  let width;
  if (url && !url.match(/\.svg$/)) {
    width = Math.pow(2, Math.round(Math.log2(minWidth / 10))) * 10 * (window.devicePixelRatio || 1);
    return url + "?imageMogr2/format/jpg/interlace/1/thumbnail/" + width + "x";
  } else {
    return url;
  }
};

@connect(
  state => ({
    painting: state.models.painting,
    profile: state.models.profile,
    heat: state.models.heat,
    component: state.containers.Home
  }),
  dispatch => bindActionCreators({
    loadPainting
  }, dispatch)
)

export default class Home extends Component {
  static propTypes = {
    painting: PropTypes.object,
    profile: PropTypes.object,
    heat: PropTypes.object,
    component: PropTypes.object,
    paintingDetail: PropTypes.object,
    loadPainting: PropTypes.func
  };

  // componentWillMount() {
  // }

  loadMore() {
    const { page } = this.props.component;
    this.props.loadPainting(page);
    console.log('load more', page);
  }

  render() {
    const {painting, component} = this.props;
    const { page, pageMeta } = this.props.component;
    return (<div className="Home">
      <h1>Home</h1>
      <p>Example for all paintings</p>
      <p><Link to="/hot">按热门排序</Link></p>
      <div className="paintingInfo">
        {component.loaded ?
          component.indexes.map((paintingId)=>(
            <div className="paintings" key={'painting' + paintingId}>
              <Link to={'/painting/' + paintingId}>
                <img src={resize(painting[paintingId].attachment, 360)}/>
                { painting[paintingId].title }
              </Link>
            </div>))
          :
          ''}
      </div>

      <div>{component.loaded && pageMeta.next === null ?
        <div>已到最后一页</div> :
        <div>{component.loaded && page % 3 == 0 ?
          <button onClick={this.loadMore.bind(this)}>加载更多</button> :
          <Waypoint className="waypoint" key={'waypoint' + page} style={{position: 'relative'}}
                    onEnter={this.loadMore.bind(this)}/>}
        </div>}
      </div>
    </div>);
  }
}

// onClick={() => this.props.loadPaintingDetail(paintingId)}
