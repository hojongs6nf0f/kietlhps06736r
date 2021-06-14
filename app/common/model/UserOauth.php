<?php
// +----------------------------------------------------------------------
// | 萤火商城系统 [ 致力于通过产品和服务，帮助商家高效化开拓市场 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017~2021 https://www.yiovo.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed 这不是一个自由软件，不允许对程序代码以任何形式任何目的的再发行
// +----------------------------------------------------------------------
// | Author: 萤火科技 <admin@yiovo.com>
// +----------------------------------------------------------------------
declare (strict_types = 1);

namespace app\common\model;

/**
 * 模型类：第三方用户信息
 * Class UserOauth
 * @package app\common\model
 */
class UserOauth extends BaseModel
{
    // 定义表名
    protected $name = 'user_oauth';

    // 定义主键
    protected $pk = 'id';

    /**
     * 是否存在第三方用户
     * @param int $userId 用户ID
     * @param string $oauthType 第三方登陆类型
     * @return mixed
     */
    public function isExistOauthType(int $userId, string $oauthType)
    {
        return $this->where('user_id', '=', $userId)
            ->where('oauth_type', '=', $oauthType)
            ->value($this->getPk());
    }

    /**
     * 获取第三方用户信息
     * @param int $userId 用户ID
     * @param string $oauthType 第三方登陆类型
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public static function getOauth(int $userId, string $oauthType)
    {
        return (new static)->where('user_id', '=', $userId)
            ->where('oauth_type', '=', $oauthType)
            ->find();
    }

}
