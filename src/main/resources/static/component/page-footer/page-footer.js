class PageFooter extends React.Component {
    render() {
        return (
            <div className="page-footer">
                <p>© 2019 MapleMovie.com.</p>
            </div>
        )
    }
}

ReactDOM.render(<PageFooter />, document.getElementById('page-footer'));