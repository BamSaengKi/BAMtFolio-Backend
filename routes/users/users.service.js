const fs = require('fs');
const { userInfo } = require('os');


const userService = {
    // 회원가입
    createUser: (userInfo) => {
        try {
            const { id } = userInfo;

            const userBuffer = fs.readFileSync('data/user.json');

            var userWrapper = JSON.parse(userBuffer.toString());
            var user = userWrapper.users;

            const temp = user.filter(item => {
                return id === item.id;
            });

            if (temp.length != 0) {
                throw new Error("이미 가입된 아이디입니다.");
            }

            const newUser = {
                ...userInfo,
                createdat: new Date()
            }

            user.push(newUser);

            fs.writeFileSync('data/user.json', JSON.stringify(userWrapper));

            return newUser;
        } catch (error) {
            throw error
        }
    },
    // 유저정보 조회
    getUserList: () => {
        try {

            const userBuffer = fs.readFileSync('data/user.json');

            var { users } = JSON.parse(userBuffer.toString());

            return users
        } catch (error) {
            throw error
        }
    },

    // 유저정보 변경
    UpdateUser: (userInfo) => {

        try {
            const { id } = userInfo;

            const userBuffer = fs.readFileSync('data/user.json');

            var userWrapper = JSON.parse(userBuffer.toString());
            var user = userWrapper.users;

            const temp = user.filter(item => {
                return id === item.id;
            });

            if (temp.length === 0) {
                throw new Error("수정할 정보가 없습니다.")
            }

            const updateUser = {
                ...userInfo,
                updateat: new Date()
            }

            const updatelist = user.map(item => {
                if (id === item.id) {
                    return updateUser;
                }

                return item;

            });

            userWrapper.users = updatelist

            fs.writeFileSync('data/user.json', JSON.stringify(userWrapper));


            return true
        } catch (error) {
            throw error

        }
    },

    DeleteUser: (userInfo) => {
        try {
            const { id } = userInfo;

            const userBuffer = fs.readFileSync('data/user.json');

            var userWrapper = JSON.parse(userBuffer.toString());
            var user = userWrapper.users;

            const temp = user.filter(item => {
                return id === item.id;
            })

            if (temp.length === 0) {
                throw new Error(" 외 앉덴데?? ")
            }

            const newlist = user.filter(item => {
                return id !== item.id;
            })

            userWrapper.users = newlist


            fs.writeFileSync('data/user.json',JSON.stringify(userWrapper));
            

            return true
        } catch (error) {
            throw error

        }
    }



}




module.exports = userService;