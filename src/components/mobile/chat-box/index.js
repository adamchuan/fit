
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenContainer, ScrollListenBox, ScrollListenNail , ScrollListen } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/mobile/chat-box/readme.md'
                import '../../../../lib/mobile/chat-box/demo'

                
                        import ChatBoxSource from '../../../../lib/mobile/chat-box/src/chat-box'
                        import ChatBoxSourceCode from 'text!../../../../lib/mobile/chat-box/src/chat-box'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/mobile/chat-box/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/mobile/chat-box/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/mobile/chat-box/demo/lists/basic.md'
                    
                    import ReverseComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/mobile/chat-box/demo/lists/reverse.js'
                    import ReverseCode from 'text!../../../../lib/mobile/chat-box/demo/lists/reverse.js'
                    import ReverseMarkdown from '../../../../lib/mobile/chat-box/demo/lists/reverse.md'
                    
                    import BackBottomComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/mobile/chat-box/demo/lists/back-bottom.js'
                    import BackBottomCode from 'text!../../../../lib/mobile/chat-box/demo/lists/back-bottom.js'
                    import BackBottomMarkdown from '../../../../lib/mobile/chat-box/demo/lists/back-bottom.md'
                    
                    import LoadingComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/mobile/chat-box/demo/lists/loading.js'
                    import LoadingCode from 'text!../../../../lib/mobile/chat-box/demo/lists/loading.js'
                    import LoadingMarkdown from '../../../../lib/mobile/chat-box/demo/lists/loading.md'
                    

                const colStyle = {
                    padding: 10
                }

                const docStyle = {
                    margin: 10,
                    background: 'white'
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {
                            page: 'demo'
                        }
                        document.title = '聊天盒子'
                    }

                    handlePageChange(value) {
                        this.setState({
                            page: value
                        })
                    }

                    render() {
                        let Content = null

                        switch (this.state.page) {
                        case 'demo':
                            Content = (
                                <Row>
                                    
                        <ScrollListenNail title={/^#\s(.*)/g.exec(BasicMarkdown)[1]}>
                            <Col span="24" style={colStyle}>
                                <CodeView md={BasicMarkdown} code={BasicCode}>

                                        <BasicComponent/>

                                </CodeView>
                            </Col>
                        </ScrollListenNail>
                    
                        <ScrollListenNail title={/^#\s(.*)/g.exec(ReverseMarkdown)[1]}>
                            <Col span="24" style={colStyle}>
                                <CodeView md={ReverseMarkdown} code={ReverseCode}>

                                        <ReverseComponent/>

                                </CodeView>
                            </Col>
                        </ScrollListenNail>
                    
                        <ScrollListenNail title={/^#\s(.*)/g.exec(BackBottomMarkdown)[1]}>
                            <Col span="24" style={colStyle}>
                                <CodeView md={BackBottomMarkdown} code={BackBottomCode}>

                                        <BackBottomComponent/>

                                </CodeView>
                            </Col>
                        </ScrollListenNail>
                    
                        <ScrollListenNail title={/^#\s(.*)/g.exec(LoadingMarkdown)[1]}>
                            <Col span="24" style={colStyle}>
                                <CodeView md={LoadingMarkdown} code={LoadingCode}>

                                        <LoadingComponent/>

                                </CodeView>
                            </Col>
                        </ScrollListenNail>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={ChatBoxSourceCode} instance={ChatBoxSource} />
                        </div>
                        
                                </div>
                            )
                            break
                        }

                        return (
                            <ScrollListenContainer className="_namespace">
                                <Layout>
                                    <Header>
                                        <Title gitlabUrl="http://gitlab.baidu.com/tb-component/mobile-chat-box/tree/master"
                                               onChange={this.handlePageChange.bind(this)}>{readme}</Title>
                                    </Header>

                                    <Section>
                                        <ScrollListenBox>
                                            {Content}
                                        </ScrollListenBox>
                                    </Section>
                                    <Sidebar direction="right"
                                             width="120">
                                        <ScrollListen/>
                                    </Sidebar>
                                </Layout>
                            </ScrollListenContainer>
                        )
                    }
                }
                