import Header from '../Header'
import Stories from '../Stories'
import PostsList from '../PostsList'
import SearchPostsList from '../SearchPostsList'
import SearchContext from '../../SearchContext/index'
import './index.css'

const Home = () => (
  <SearchContext.Consumer>
    {value => {
      const {searchInput, searchPostView} = value
      return (
        <>
          <Header />
          <div className="bg-color">
            {searchPostView ? (
              <SearchPostsList input={searchInput} />
            ) : (
              <>
                <Stories />
                <PostsList />
              </>
            )}
          </div>
        </>
      )
    }}
  </SearchContext.Consumer>
)

export default Home
