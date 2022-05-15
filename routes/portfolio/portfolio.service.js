const fs = require('fs');


const protfolioService = {
    // 글 작성
    Write: (project) => {
        try {

            const pfBuffer = fs.readFileSync('data/portfolio.json');

            var pfWrapper = JSON.parse(pfBuffer.toString());
            var pfList = pfWrapper.PortfolioList

            const { id } = project;

            const temp = pfList.filter(item => {
                return id === item.id;
            });

            if (temp.length !== 0) {
                throw new Error("ㅋㅋ 아이디 하나당 게시물은 하나밖에 적을 수 ㅇ벗으셈 ㅋㅋ")
            }

            const newPortpolio = {
                ...project,
                updateat: new Date()
            }

            pfList.push(newPortpolio);

            fs.writeFileSync('data/portfolio.json', JSON.stringify(pfWrapper));

            return true;

        } catch (error) {
            throw error
        }
    },

    // project 조회
    getproject: () => {
        try {
            const pfBuffer = fs.readFileSync('data/portfolio.json');

            var { PortfolioList } = JSON.parse(pfBuffer.toString());

            return PortfolioList

        } catch (error) {
            throw error

        }
    },

    updateproject: (project) => {
        try {
            const { id } = project;

            const pfBuffer = fs.readFileSync('data/portfolio.json');

            var pfWrapper = JSON.parse(pfBuffer.toString());
            var pfList = pfWrapper.PortfolioList

            const temp = pfList.filter(item => {
                return id === item.id;
            })

            if (temp.length === 0) {
                throw new Error("수정한 정보가 없습니다.")
            }

            const updatePortfolio = {
                ...project,
                updateat: new Date()
            }

            const updatelist = pfList.map(item => {
                if (id === item.id) {
                    return updatePortfolio;
                }

                return item;
            })

            pfWrapper.PortfolioList = updatelist

            fs.writeFileSync('data/portfolio.json', JSON.stringify(pfWrapper));

            return true


        } catch (error) {
            throw error

        }
    },
    // project 삭제
    deleteproject: (project) => {

        try {
            const { id } = project;

            const pfBuffer = fs.readFileSync('data/portfolio.json');
            var pfWrapper = JSON.parse(pfBuffer.toString());
            var pfList = pfWrapper.PortfolioList;



            const temp = pfList.filter(item => {
                return id === item.id;
            })

            if (temp.length === 0) {
                throw new Error("외 앉덴데?")
            }

            const newPortpolio = pfList.filter(item => {
                return id !== item.id;
            })

            pfWrapper.PortfolioList = newPortpolio;

            fs.writeFileSync('data/portfolio.json', JSON.stringify(pfWrapper));
            

            return true
        } catch (error) {
            throw error

        }


    }

}

module.exports = protfolioService