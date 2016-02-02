
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenContainer, ScrollListenBox, ScrollListenNail , ScrollListen } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/select/readme.md'
                import '../../../../lib/pc/select/demo'

                
                        import SelectSource from '../../../../lib/pc/select/src/select'
                        import SelectSourceCode from 'text!../../../../lib/pc/select/src/select'
                        
                        import OptionSource from '../../../../lib/pc/select/src/option'
                        import OptionSourceCode from 'text!../../../../lib/pc/select/src/option'
                        
                        import OptGroupSource from '../../../../lib/pc/select/src/opt-group'
                        import OptGroupSourceCode from 'text!../../../../lib/pc/select/src/opt-group'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/select/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/select/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/select/demo/lists/basic.md'
                    
                    import DisabledComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/select/demo/lists/disabled.js'
                    import DisabledCode from 'text!../../../../lib/pc/select/demo/lists/disabled.js'
                    import DisabledMarkdown from '../../../../lib/pc/select/demo/lists/disabled.md'
                    
                    import GroupComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/select/demo/lists/group.js'
                    import GroupCode from 'text!../../../../lib/pc/select/demo/lists/group.js'
                    import GroupMarkdown from '../../../../lib/pc/select/demo/lists/group.md'
                    
                    import LabelComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/select/demo/lists/label.js'
                    import LabelCode from 'text!../../../../lib/pc/select/demo/lists/label.js'
                    import LabelMarkdown from '../../../../lib/pc/select/demo/lists/label.md'
                    
                    import SearchComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/select/demo/lists/search.js'
                    import SearchCode from 'text!../../../../lib/pc/select/demo/lists/search.js'
                    import SearchMarkdown from '../../../../lib/pc/select/demo/lists/search.md'
                    
                    import SimpleComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/select/demo/lists/simple.js'
                    import SimpleCode from 'text!../../../../lib/pc/select/demo/lists/simple.js'
                    import SimpleMarkdown from '../../../../lib/pc/select/demo/lists/simple.md'
                    

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
                        document.title = '选择框'
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
                                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={BasicMarkdown} code={BasicCode}>
                            <ScrollListenNail>
                                <BasicComponent/>
                            </ScrollListenNail>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={DisabledMarkdown} code={DisabledCode}>
                            <ScrollListenNail>
                                <DisabledComponent/>
                            </ScrollListenNail>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={GroupMarkdown} code={GroupCode}>
                            <ScrollListenNail>
                                <GroupComponent/>
                            </ScrollListenNail>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={LabelMarkdown} code={LabelCode}>
                            <ScrollListenNail>
                                <LabelComponent/>
                            </ScrollListenNail>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={SearchMarkdown} code={SearchCode}>
                            <ScrollListenNail>
                                <SearchComponent/>
                            </ScrollListenNail>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={SimpleMarkdown} code={SimpleCode}>
                            <ScrollListenNail>
                                <SimpleComponent/>
                            </ScrollListenNail>
                        </CodeView>
                    </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={SelectSourceCode} instance={SelectSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={OptionSourceCode} instance={OptionSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={OptGroupSourceCode} instance={OptGroupSource} />
                        </div>
                        
                                </div>
                            )
                            break
                        }

                        return (
                            <ScrollListenContainer className="_namespace">
                                <Layout>
                                    <Header>
                                        <Title gitlabUrl="http://gitlab.baidu.com/tb-component/pc-select/tree/master"
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
                