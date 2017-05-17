<template>
    <div ui-view="" class="ng-scope">
        <div class="panel panel-default ng-scope" xo-rest="bills" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="bills">
            <div class="row wrapper">
                <div class="col-xs-12 col-md-4 m-t">
                    <div class="inline">
                        <input type="text" id="ctl_date_start" ng-model="params.date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;">
                        <div range-datetimepicker="" ng-model="dateRange" options="options" exoptions="exOptions" class="ng-untouched ng-valid ng-scope ng-isolate-scope range-datetimepicker-container clearfix ng-dirty ng-valid-parse">
                            <div class="showRange">
                                <div class="btn btn-outline dateRangeLabel">
                                    <span class="rangeData1">2017-04-01</span>-
                                    <span class="rangeData2">2017-05-12</span>
                                    <span class="caret"></span>
                                </div>
                            </div>
                            <div class="datepicker-calendar-menu pickerBody datepickerHidden">
                                <div class="datepicker-calendar">
                                    <div class="datepicker-head form-inline showDate">
                                        <span>时间范围:</span>
                                        <label>
                                            <input type="text" class="form-control rangeDate1">
                                        </label>
                                        <span class="date-separator">至</span>
                                        <label>
                                            <input type="text" class="form-control rangeDate2">
                                        </label>
                                        <button type="button" class="updateTimeButton btn btn-sm btn-light btn-primary">应用</button>
                                    </div>
                                    <div class="calendars row">
                                        <div class="calendar col-md-6" style="position: relative;">
                                            <div class="datetimepickerSelect datetimepickerSelect1">
                                                <input type="hidden" class="form-control" value="2017-04-01">
                                                <div class="bootstrap-datetimepicker-widget usetwentyfour">
                                                    <ul class="list-unstyled">
                                                        <li>
                                                            <div class="datepicker">
                                                                <div class="datepicker-days" style="display: block;">
                                                                    <table class="table-condensed">
                                                                        <thead>
                                                                            <tr>
                                                                                <th class="prev" data-action="previous">
                                                                                    <span class="glyphicon glyphicon-chevron-left" title="Previous Month"></span>
                                                                                </th>
                                                                                <th class="picker-switch" data-action="pickerSwitch" colspan="5" title="Select Month">四月 2017</th>
                                                                                <th class="next" data-action="next">
                                                                                    <span class="glyphicon glyphicon-chevron-right" title="Next Month"></span>
                                                                                </th>
                                                                            </tr>
                                                                            <tr>
                                                                                <th class="dow">一</th>
                                                                                <th class="dow">二</th>
                                                                                <th class="dow">三</th>
                                                                                <th class="dow">四</th>
                                                                                <th class="dow">五</th>
                                                                                <th class="dow">六</th>
                                                                                <th class="dow">日</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td data-action="selectDay" data-day="2017-03-27" class="day old">27</td>
                                                                                <td data-action="selectDay" data-day="2017-03-28" class="day old">28</td>
                                                                                <td data-action="selectDay" data-day="2017-03-29" class="day old">29</td>
                                                                                <td data-action="selectDay" data-day="2017-03-30" class="day old">30</td>
                                                                                <td data-action="selectDay" data-day="2017-03-31" class="day old">31</td>
                                                                                <td data-action="selectDay" data-day="2017-04-01" class="day active weekend">1</td>
                                                                                <td data-action="selectDay" data-day="2017-04-02" class="day weekend">2</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td data-action="selectDay" data-day="2017-04-03" class="day">3</td>
                                                                                <td data-action="selectDay" data-day="2017-04-04" class="day">4</td>
                                                                                <td data-action="selectDay" data-day="2017-04-05" class="day">5</td>
                                                                                <td data-action="selectDay" data-day="2017-04-06" class="day">6</td>
                                                                                <td data-action="selectDay" data-day="2017-04-07" class="day">7</td>
                                                                                <td data-action="selectDay" data-day="2017-04-08" class="day weekend">8</td>
                                                                                <td data-action="selectDay" data-day="2017-04-09" class="day weekend">9</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td data-action="selectDay" data-day="2017-04-10" class="day">10</td>
                                                                                <td data-action="selectDay" data-day="2017-04-11" class="day">11</td>
                                                                                <td data-action="selectDay" data-day="2017-04-12" class="day">12</td>
                                                                                <td data-action="selectDay" data-day="2017-04-13" class="day">13</td>
                                                                                <td data-action="selectDay" data-day="2017-04-14" class="day">14</td>
                                                                                <td data-action="selectDay" data-day="2017-04-15" class="day weekend">15</td>
                                                                                <td data-action="selectDay" data-day="2017-04-16" class="day weekend">16</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td data-action="selectDay" data-day="2017-04-17" class="day">17</td>
                                                                                <td data-action="selectDay" data-day="2017-04-18" class="day">18</td>
                                                                                <td data-action="selectDay" data-day="2017-04-19" class="day">19</td>
                                                                                <td data-action="selectDay" data-day="2017-04-20" class="day">20</td>
                                                                                <td data-action="selectDay" data-day="2017-04-21" class="day">21</td>
                                                                                <td data-action="selectDay" data-day="2017-04-22" class="day weekend">22</td>
                                                                                <td data-action="selectDay" data-day="2017-04-23" class="day weekend">23</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td data-action="selectDay" data-day="2017-04-24" class="day">24</td>
                                                                                <td data-action="selectDay" data-day="2017-04-25" class="day">25</td>
                                                                                <td data-action="selectDay" data-day="2017-04-26" class="day">26</td>
                                                                                <td data-action="selectDay" data-day="2017-04-27" class="day">27</td>
                                                                                <td data-action="selectDay" data-day="2017-04-28" class="day">28</td>
                                                                                <td data-action="selectDay" data-day="2017-04-29" class="day weekend">29</td>
                                                                                <td data-action="selectDay" data-day="2017-04-30" class="day weekend">30</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td data-action="selectDay" data-day="2017-05-01" class="day new">1</td>
                                                                                <td data-action="selectDay" data-day="2017-05-02" class="day new">2</td>
                                                                                <td data-action="selectDay" data-day="2017-05-03" class="day new">3</td>
                                                                                <td data-action="selectDay" data-day="2017-05-04" class="day new">4</td>
                                                                                <td data-action="selectDay" data-day="2017-05-05" class="day new">5</td>
                                                                                <td data-action="selectDay" data-day="2017-05-06" class="day new weekend">6</td>
                                                                                <td data-action="selectDay" data-day="2017-05-07" class="day new weekend">7</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div class="datepicker-months" style="display: none;">
                                                                    <table class="table-condensed">
                                                                        <thead>
                                                                            <tr>
                                                                                <th class="prev" data-action="previous">
                                                                                    <span class="glyphicon glyphicon-chevron-left" title="Previous Year"></span>
                                                                                </th>
                                                                                <th class="picker-switch" data-action="pickerSwitch" colspan="5" title="Select Year">2017</th>
                                                                                <th class="next disabled" data-action="next">
                                                                                    <span class="glyphicon glyphicon-chevron-right" title="Next Year"></span>
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td colspan="7">
                                                                                    <span data-action="selectMonth" class="month">1月</span>
                                                                                    <span data-action="selectMonth" class="month">2月</span>
                                                                                    <span data-action="selectMonth" class="month">3月</span>
                                                                                    <span data-action="selectMonth" class="month active">4月</span>
                                                                                    <span data-action="selectMonth" class="month">5月</span>
                                                                                    <span data-action="selectMonth" class="month disabled">6月</span>
                                                                                    <span data-action="selectMonth" class="month disabled">7月</span>
                                                                                    <span data-action="selectMonth" class="month disabled">8月</span>
                                                                                    <span data-action="selectMonth" class="month disabled">9月</span>
                                                                                    <span data-action="selectMonth" class="month disabled">10月</span>
                                                                                    <span data-action="selectMonth" class="month disabled">11月</span>
                                                                                    <span data-action="selectMonth" class="month disabled">12月</span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div class="datepicker-years" style="display: none;">
                                                                    <table class="table-condensed">
                                                                        <thead>
                                                                            <tr>
                                                                                <th class="prev" data-action="previous">
                                                                                    <span class="glyphicon glyphicon-chevron-left" title="Previous Decade"></span>
                                                                                </th>
                                                                                <th class="picker-switch" data-action="pickerSwitch" colspan="5" title="Select Decade">2012-2023</th>
                                                                                <th class="next disabled" data-action="next">
                                                                                    <span class="glyphicon glyphicon-chevron-right" title="Next Decade"></span>
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td colspan="7">
                                                                                    <span data-action="selectYear" class="year">2012</span>
                                                                                    <span data-action="selectYear" class="year">2013</span>
                                                                                    <span data-action="selectYear" class="year">2014</span>
                                                                                    <span data-action="selectYear" class="year">2015</span>
                                                                                    <span data-action="selectYear" class="year">2016</span>
                                                                                    <span data-action="selectYear" class="year active">2017</span>
                                                                                    <span data-action="selectYear" class="year disabled">2018</span>
                                                                                    <span data-action="selectYear" class="year disabled">2019</span>
                                                                                    <span data-action="selectYear" class="year disabled">2020</span>
                                                                                    <span data-action="selectYear" class="year disabled">2021</span>
                                                                                    <span data-action="selectYear" class="year disabled">2022</span>
                                                                                    <span data-action="selectYear" class="year disabled">2023</span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div class="datepicker-decades" style="display: none;">
                                                                    <table class="table-condensed">
                                                                        <thead>
                                                                            <tr>
                                                                                <th class="prev" data-action="previous">
                                                                                    <span class="glyphicon glyphicon-chevron-left" title="Previous Century"></span>
                                                                                </th>
                                                                                <th class="picker-switch" data-action="pickerSwitch" colspan="5">2000-2107</th>
                                                                                <th class="next disabled" data-action="next">
                                                                                    <span class="glyphicon glyphicon-chevron-right" title="Next Century"></span>
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td colspan="7">
                                                                                    <span data-action="selectDecade" class="decade" data-selection="2005">2000 - 2011</span>
                                                                                    <span data-action="selectDecade" class="decade active" data-selection="2017">2012 - 2023</span>
                                                                                    <span data-action="selectDecade" class="decade disabled" data-selection="2029">2024 - 2035</span>
                                                                                    <span data-action="selectDecade" class="decade disabled" data-selection="2041">2036 - 2047</span>
                                                                                    <span data-action="selectDecade" class="decade disabled" data-selection="2053">2048 - 2059</span>
                                                                                    <span data-action="selectDecade" class="decade disabled" data-selection="2065">2060 - 2071</span>
                                                                                    <span data-action="selectDecade" class="decade disabled" data-selection="2077">2072 - 2083</span>
                                                                                    <span data-action="selectDecade" class="decade disabled" data-selection="2089">2084 - 2095</span>
                                                                                    <span data-action="selectDecade" class="decade disabled" data-selection="2101">2096 - 2107</span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="picker-switch accordion-toggle">
                                                            <table class="table-condensed">
                                                                <tbody>
                                                                    <tr></tr>
                                                                </tbody>
                                                            </table>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="calendar col-md-6" style="position: relative;">
                                            <div class="datetimepickerSelect datetimepickerSelect2">
                                                <input type="hidden" class="form-control" value="2017-05-12">
                                                <div class="bootstrap-datetimepicker-widget usetwentyfour">
                                                    <ul class="list-unstyled">
                                                        <li>
                                                            <div class="datepicker">
                                                                <div class="datepicker-days" style="display: block;">
                                                                    <table class="table-condensed">
                                                                        <thead>
                                                                            <tr>
                                                                                <th class="prev" data-action="previous">
                                                                                    <span class="glyphicon glyphicon-chevron-left" title="Previous Month"></span>
                                                                                </th>
                                                                                <th class="picker-switch" data-action="pickerSwitch" colspan="5" title="Select Month">五月 2017</th>
                                                                                <th class="next" data-action="next">
                                                                                    <span class="glyphicon glyphicon-chevron-right" title="Next Month"></span>
                                                                                </th>
                                                                            </tr>
                                                                            <tr>
                                                                                <th class="dow">一</th>
                                                                                <th class="dow">二</th>
                                                                                <th class="dow">三</th>
                                                                                <th class="dow">四</th>
                                                                                <th class="dow">五</th>
                                                                                <th class="dow">六</th>
                                                                                <th class="dow">日</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td data-action="selectDay" data-day="2017-05-01" class="day">1</td>
                                                                                <td data-action="selectDay" data-day="2017-05-02" class="day">2</td>
                                                                                <td data-action="selectDay" data-day="2017-05-03" class="day">3</td>
                                                                                <td data-action="selectDay" data-day="2017-05-04" class="day">4</td>
                                                                                <td data-action="selectDay" data-day="2017-05-05" class="day">5</td>
                                                                                <td data-action="selectDay" data-day="2017-05-06" class="day weekend">6</td>
                                                                                <td data-action="selectDay" data-day="2017-05-07" class="day weekend">7</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td data-action="selectDay" data-day="2017-05-08" class="day">8</td>
                                                                                <td data-action="selectDay" data-day="2017-05-09" class="day">9</td>
                                                                                <td data-action="selectDay" data-day="2017-05-10" class="day">10</td>
                                                                                <td data-action="selectDay" data-day="2017-05-11" class="day">11</td>
                                                                                <td data-action="selectDay" data-day="2017-05-12" class="day active today">12</td>
                                                                                <td data-action="selectDay" data-day="2017-05-13" class="day weekend">13</td>
                                                                                <td data-action="selectDay" data-day="2017-05-14" class="day weekend">14</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td data-action="selectDay" data-day="2017-05-15" class="day">15</td>
                                                                                <td data-action="selectDay" data-day="2017-05-16" class="day">16</td>
                                                                                <td data-action="selectDay" data-day="2017-05-17" class="day">17</td>
                                                                                <td data-action="selectDay" data-day="2017-05-18" class="day">18</td>
                                                                                <td data-action="selectDay" data-day="2017-05-19" class="day">19</td>
                                                                                <td data-action="selectDay" data-day="2017-05-20" class="day weekend">20</td>
                                                                                <td data-action="selectDay" data-day="2017-05-21" class="day weekend">21</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td data-action="selectDay" data-day="2017-05-22" class="day">22</td>
                                                                                <td data-action="selectDay" data-day="2017-05-23" class="day">23</td>
                                                                                <td data-action="selectDay" data-day="2017-05-24" class="day">24</td>
                                                                                <td data-action="selectDay" data-day="2017-05-25" class="day">25</td>
                                                                                <td data-action="selectDay" data-day="2017-05-26" class="day">26</td>
                                                                                <td data-action="selectDay" data-day="2017-05-27" class="day weekend">27</td>
                                                                                <td data-action="selectDay" data-day="2017-05-28" class="day weekend">28</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td data-action="selectDay" data-day="2017-05-29" class="day">29</td>
                                                                                <td data-action="selectDay" data-day="2017-05-30" class="day">30</td>
                                                                                <td data-action="selectDay" data-day="2017-05-31" class="day">31</td>
                                                                                <td data-action="selectDay" data-day="2017-06-01" class="day new">1</td>
                                                                                <td data-action="selectDay" data-day="2017-06-02" class="day new">2</td>
                                                                                <td data-action="selectDay" data-day="2017-06-03" class="day new weekend">3</td>
                                                                                <td data-action="selectDay" data-day="2017-06-04" class="day new weekend">4</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td data-action="selectDay" data-day="2017-06-05" class="day new">5</td>
                                                                                <td data-action="selectDay" data-day="2017-06-06" class="day new">6</td>
                                                                                <td data-action="selectDay" data-day="2017-06-07" class="day new">7</td>
                                                                                <td data-action="selectDay" data-day="2017-06-08" class="day new">8</td>
                                                                                <td data-action="selectDay" data-day="2017-06-09" class="day new">9</td>
                                                                                <td data-action="selectDay" data-day="2017-06-10" class="day new weekend">10</td>
                                                                                <td data-action="selectDay" data-day="2017-06-11" class="day new weekend">11</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div class="datepicker-months" style="display: none;">
                                                                    <table class="table-condensed">
                                                                        <thead>
                                                                            <tr>
                                                                                <th class="prev disabled" data-action="previous">
                                                                                    <span class="glyphicon glyphicon-chevron-left" title="Previous Year"></span>
                                                                                </th>
                                                                                <th class="picker-switch" data-action="pickerSwitch" colspan="5" title="Select Year">2017</th>
                                                                                <th class="next" data-action="next">
                                                                                    <span class="glyphicon glyphicon-chevron-right" title="Next Year"></span>
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td colspan="7">
                                                                                    <span data-action="selectMonth" class="month disabled">1月</span>
                                                                                    <span data-action="selectMonth" class="month disabled">2月</span>
                                                                                    <span data-action="selectMonth" class="month disabled">3月</span>
                                                                                    <span data-action="selectMonth" class="month">4月</span>
                                                                                    <span data-action="selectMonth" class="month active">5月</span>
                                                                                    <span data-action="selectMonth" class="month">6月</span>
                                                                                    <span data-action="selectMonth" class="month">7月</span>
                                                                                    <span data-action="selectMonth" class="month">8月</span>
                                                                                    <span data-action="selectMonth" class="month">9月</span>
                                                                                    <span data-action="selectMonth" class="month">10月</span>
                                                                                    <span data-action="selectMonth" class="month">11月</span>
                                                                                    <span data-action="selectMonth" class="month">12月</span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div class="datepicker-years" style="display: none;">
                                                                    <table class="table-condensed">
                                                                        <thead>
                                                                            <tr>
                                                                                <th class="prev disabled" data-action="previous">
                                                                                    <span class="glyphicon glyphicon-chevron-left" title="Previous Decade"></span>
                                                                                </th>
                                                                                <th class="picker-switch" data-action="pickerSwitch" colspan="5" title="Select Decade">2012-2023</th>
                                                                                <th class="next disabled" data-action="next">
                                                                                    <span class="glyphicon glyphicon-chevron-right" title="Next Decade"></span>
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td colspan="7">
                                                                                    <span data-action="selectYear" class="year disabled">2012</span>
                                                                                    <span data-action="selectYear" class="year disabled">2013</span>
                                                                                    <span data-action="selectYear" class="year disabled">2014</span>
                                                                                    <span data-action="selectYear" class="year disabled">2015</span>
                                                                                    <span data-action="selectYear" class="year disabled">2016</span>
                                                                                    <span data-action="selectYear" class="year active">2017</span>
                                                                                    <span data-action="selectYear" class="year">2018</span>
                                                                                    <span data-action="selectYear" class="year disabled">2019</span>
                                                                                    <span data-action="selectYear" class="year disabled">2020</span>
                                                                                    <span data-action="selectYear" class="year disabled">2021</span>
                                                                                    <span data-action="selectYear" class="year disabled">2022</span>
                                                                                    <span data-action="selectYear" class="year disabled">2023</span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div class="datepicker-decades" style="display: none;">
                                                                    <table class="table-condensed">
                                                                        <thead>
                                                                            <tr>
                                                                                <th class="prev disabled" data-action="previous">
                                                                                    <span class="glyphicon glyphicon-chevron-left" title="Previous Century"></span>
                                                                                </th>
                                                                                <th class="picker-switch" data-action="pickerSwitch" colspan="5">2000-2107</th>
                                                                                <th class="next disabled" data-action="next">
                                                                                    <span class="glyphicon glyphicon-chevron-right" title="Next Century"></span>
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td colspan="7">
                                                                                    <span data-action="selectDecade" class="decade disabled" data-selection="2005">2000 - 2011</span>
                                                                                    <span data-action="selectDecade" class="decade active" data-selection="2017">2012 - 2023</span>
                                                                                    <span data-action="selectDecade" class="decade disabled" data-selection="2029">2024 - 2035</span>
                                                                                    <span data-action="selectDecade" class="decade disabled" data-selection="2041">2036 - 2047</span>
                                                                                    <span data-action="selectDecade" class="decade disabled" data-selection="2053">2048 - 2059</span>
                                                                                    <span data-action="selectDecade" class="decade disabled" data-selection="2065">2060 - 2071</span>
                                                                                    <span data-action="selectDecade" class="decade disabled" data-selection="2077">2072 - 2083</span>
                                                                                    <span data-action="selectDecade" class="decade disabled" data-selection="2089">2084 - 2095</span>
                                                                                    <span data-action="selectDecade" class="decade disabled" data-selection="2101">2096 - 2107</span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="picker-switch accordion-toggle">
                                                            <table class="table-condensed">
                                                                <tbody>
                                                                    <tr></tr>
                                                                </tbody>
                                                            </table>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="text" id="ctl_date_end" ng-model="params.date_end" class="ng-pristine ng-untouched ng-valid" style="display: none;">
                    </div>
                </div>
                <div class="col-xs-12 col-md-8 m-t">
                    <div class="btn-group m-l">
                        <label btn-radio="'today'" ng-model="duration" class="btn btn-default ng-pristine ng-untouched ng-valid active">今日</label>
                        <label btn-radio="'week'" ng-model="duration" class="btn btn-default ng-pristine ng-untouched ng-valid">本周</label>
                        <label btn-radio="'month'" ng-model="duration" class="btn btn-default ng-pristine ng-untouched ng-valid">本月</label>
                    </div>
                    <div class="btn-group m-l">
                        <label btn-radio="" ng-model="params.check_status" class="btn btn-default ng-pristine ng-untouched ng-valid active">所有</label>
                        <label btn-radio="'0'" ng-model="params.check_status" class="btn btn-default ng-pristine ng-untouched ng-valid">未对账</label>
                        <label btn-radio="'1'" ng-model="params.check_status" class="btn btn-default ng-pristine ng-untouched ng-valid">已对账</label>
                    </div>
                    <div class="inline w-sm va-m m-l-xs">
                        <div class="input-group">
                            <input type="text" placeholder="学员" ng-model="param_student_name" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly">
                            <span class="input-group-btn">
                                <button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员" @click="lbShowDailog($event,'lb-selectstudenttpl')">
                                    <i class="icon-user"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                    <button class="btn btn-default ng-isolate-scope" export="bills" export-params="params">
                        <i class="glyphicon glyphicon-export"></i>导出
                    </button>
                    <div id="fct-bills" style="display:none;">
                        <form name="export_form_bills" action="/api/export" method="post" target="_blank" class="ng-pristine ng-valid ng-scope">
                            <input type="hidden" name="X-XSRF-TOKEN" value="3fcd68790fbf79751a57ca8fbda8b037">
                            <input type="hidden" name="resource" value="bills">
                            <input type="hidden" name="date_end" value="2017-05-12" ng-repeat="(key,value) in params" class="ng-scope">
                            <input type="hidden" name="date_start" value="2017-04-01" ng-repeat="(key,value) in params" class="ng-scope">
                            <input type="hidden" name="ob_id" value="11091" ng-repeat="(key,value) in params" class="ng-scope">
                            <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" class="ng-scope">
                            <input type="hidden" name="pagesize" value="20" ng-repeat="(key,value) in params" class="ng-scope">
                        </form>
                    </div>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped b-t b-light">
                    <thead>
                        <tr>
                            <th>学员</th>
                            <th>付款日期</th>
                            <th>金额</th>
                            <th>付款方式</th>
                            <th>备注</th>
                            <th>经办人</th>
                            <th>对账状态</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td class="ng-binding">李岩</td>
                            <td class="ng-binding">2017-05-11 20:07</td>
                            <td>
                                <span class="badge bg-success ng-binding">1000.00</span>
                            </td>
                            <td class="ng-binding">现金</td>
                            <td class="ng-binding">-</td>
                            <td class="ng-binding">陈佳木</td>
                            <td>
                                <span ng-if="item.check_status == '0'" class="badge bg-warning ng-scope">未对账</span>
                            </td>
                            <td>
                                <a class="btn btn-xs btn-default" ng-class="{'btn-primary':item.$checked||item.check_status=='1'}" ng-click="toggle_check(item)" ng-disabled="item.check_status=='1'">核对</a>
                            </td>
                        </tr>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td class="ng-binding">李哥</td>
                            <td class="ng-binding">2017-05-05 14:45</td>
                            <td>
                                <span class="badge bg-success ng-binding">1000.00</span>
                            </td>
                            <td class="ng-binding">现金</td>
                            <td class="ng-binding">-</td>
                            <td class="ng-binding">陈佳木</td>
                            <td>
                                <span ng-if="item.check_status == '0'" class="badge bg-warning ng-scope">未对账</span>
                            </td>
                            <td>
                                <a class="btn btn-xs btn-default" ng-class="{'btn-primary':item.$checked||item.check_status=='1'}" ng-click="toggle_check(item)" ng-disabled="item.check_status=='1'">核对</a>
                            </td>
                        </tr>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td class="ng-binding">李哥</td>
                            <td class="ng-binding">2017-05-05 14:44</td>
                            <td>
                                <span class="badge bg-success ng-binding">1000.00</span>
                            </td>
                            <td class="ng-binding">微信支付</td>
                            <td class="ng-binding">-</td>
                            <td class="ng-binding">陈佳木</td>
                            <td>
                                <span ng-if="item.check_status == '0'" class="badge bg-warning ng-scope">未对账</span>
                            </td>
                            <td>
                                <a class="btn btn-xs btn-default" ng-class="{'btn-primary':item.$checked||item.check_status=='1'}" ng-click="toggle_check(item)" ng-disabled="item.check_status=='1'">核对</a>
                            </td>
                        </tr>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td class="ng-binding">陈一</td>
                            <td class="ng-binding">2017-04-17 16:30</td>
                            <td>
                                <span class="badge bg-success ng-binding">1900.00</span>
                            </td>
                            <td class="ng-binding">现金</td>
                            <td class="ng-binding">2000</td>
                            <td class="ng-binding">陈佳木</td>
                            <td>
                                <span ng-if="item.check_status == '0'" class="badge bg-warning ng-scope">未对账</span>
                            </td>
                            <td>
                                <a class="btn btn-xs btn-default" ng-class="{'btn-primary':item.$checked||item.check_status=='1'}" ng-click="toggle_check(item)" ng-disabled="item.check_status=='1'">核对</a>
                            </td>
                        </tr>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td class="ng-binding">李哥</td>
                            <td class="ng-binding">2017-04-17 15:38</td>
                            <td>
                                <span class="badge bg-success ng-binding">200.00</span>
                            </td>
                            <td class="ng-binding">微信支付</td>
                            <td class="ng-binding">-</td>
                            <td class="ng-binding">陈佳木</td>
                            <td>
                                <span ng-if="item.check_status == '0'" class="badge bg-warning ng-scope">未对账</span>
                            </td>
                            <td>
                                <a class="btn btn-xs btn-default" ng-class="{'btn-primary':item.$checked||item.check_status=='1'}" ng-click="toggle_check(item)" ng-disabled="item.check_status=='1'">核对</a>
                            </td>
                        </tr>
                        <tr ng-if="grid.$data.ctotal_amount" class="ng-scope">
                            <td></td>
                            <td colspan="8">
                                小计:
                                <span class="text-success ng-binding">5100元</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="grid-data-result"></div>
            </div>
            <div class="panel-footer">
                <div class="row">
                    <div class="col-sm-4 col-xs-12"></div>
                    <div class="col-sm-4 text-center">
                        <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 5 条记录">共 5 条记录</small>
                        <small ng-if="grid.$data.total_amount" class="ng-binding ng-scope">总金额:5100.00元</small>
                    </div>
                    <div class="col-sm-4 text-right text-center-xs">
                        <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
                    </div>
                </div>
            </div>
            <div class="float-btn-box" ng-class="{'float-btn-box-show':have_selected()}">
                <button class="btn btn-info btn-rounded ng-binding" ng-disabled="saving" ng-click="bat_check_pay()">确定(0)</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'income',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {
    }
}
</script>