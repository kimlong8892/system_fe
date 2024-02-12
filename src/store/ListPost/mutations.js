export default {
    setListPost(state, listPost) {
        state.listPost = listPost;
    },
    setLoading(state, isLoading) {
        state.isLoading = isLoading;
    },
    setTotalPage(state, totalPage) {
        state.totalPage = totalPage;
    },
    setCurrentPage(state, currentPage) {
        state.currentPage = currentPage;
    },
    setSearch(state, search) {
        state.search = search;
    },
    setError(state, error) {
        state.error = error;
    }
}