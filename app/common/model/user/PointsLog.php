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

namespace app\common\model\user;

use app\common\model\BaseModel;

/**
 * 用户积分变动明细模型
 * Class PointsLog
 * @package app\common\model\user
 */
class PointsLog extends BaseModel
{
    // 定义表名
    protected $name = 'user_points_log';

    // 定义主键
    protected $pk = 'log_id';

    protected $updateTime = false;

    /**
     * 关联会员记录表
     * @return \think\model\relation\BelongsTo
     */
    public function user()
    {
        $module = self::getCalledModule();
        return $this->belongsTo("app\\{$module}\\model\\User");
    }

    /**
     * 新增记录
     * @param $data
     */
    public static function add($data)
    {
        $static = new static;
        $static->save(array_merge(['store_id' => $static::$storeId], $data));
    }

    /**
     * 新增记录 (批量)
     * @param $saveData
     * @return bool
     */
    public function onBatchAdd($saveData)
    {
        return $this->addAll($saveData) !== false;
    }

}
