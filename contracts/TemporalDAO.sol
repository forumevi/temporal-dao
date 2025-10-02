// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TemporalDAO {
    struct DAO {
        uint256 startTime;
        uint256 duration; // in seconds
        bool finalized;
    }

    mapping(uint256 => DAO) public daos;
    uint256 public daoCounter;

    event DAOCreated(uint256 indexed daoId, address creator, uint256 startTime, uint256 duration);
    event DAOFinalized(uint256 indexed daoId);

    function createDAO(uint256 _duration) external {
        require(_duration > 0, "Duration must be positive");
        uint256 id = daoCounter++;
        daos[id] = DAO({
            startTime: block.timestamp,
            duration: _duration,
            finalized: false
        });
        emit DAOCreated(id, msg.sender, block.timestamp, _duration);
    }

    function isActive(uint256 _daoId) public view returns (bool) {
        DAO memory dao = daos[_daoId];
        if (dao.finalized) return false;
        return block.timestamp < dao.startTime + dao.duration;
    }

    function finalizeDAO(uint256 _daoId) external {
        DAO storage dao = daos[_daoId];
        require(!dao.finalized, "Already finalized");
        require(block.timestamp >= dao.startTime + dao.duration, "DAO still active");
        dao.finalized = true;
        emit DAOFinalized(_daoId);
    }
}