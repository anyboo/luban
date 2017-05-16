<template>
    <div ui-view="" class="ng-scope">
        <div class="panel panel-default ng-scope" xo-rest="attendances" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="attendances">
            <div class="row wrapper">
                <div class="col-xs-12 col-md-4 m-t">
                    <div class="inline">
                        <input type="text" id="ctl_date_start" ng-model="params.date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;">
                        <div range-datetimepicker="" ng-model="dateRange" options="options" exoptions="exOptions" class="ng-pristine ng-untouched ng-valid ng-scope ng-isolate-scope range-datetimepicker-container clearfix">
                            <div class="showRange">
                                <div class="btn btn-outline dateRangeLabel">
                                    <span class="rangeData1">2017-05-12</span>-
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
                                                                                <th class="next disabled" data-action="next">
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
                                                                                <td data-action="selectDay" data-day="2017-05-13" class="day disabled weekend">13</td>
                                                                                <td data-action="selectDay" data-day="2017-05-14" class="day disabled weekend">14</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td data-action="selectDay" data-day="2017-05-15" class="day disabled">15</td>
                                                                                <td data-action="selectDay" data-day="2017-05-16" class="day disabled">16</td>
                                                                                <td data-action="selectDay" data-day="2017-05-17" class="day disabled">17</td>
                                                                                <td data-action="selectDay" data-day="2017-05-18" class="day disabled">18</td>
                                                                                <td data-action="selectDay" data-day="2017-05-19" class="day disabled">19</td>
                                                                                <td data-action="selectDay" data-day="2017-05-20" class="day disabled weekend">20</td>
                                                                                <td data-action="selectDay" data-day="2017-05-21" class="day disabled weekend">21</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td data-action="selectDay" data-day="2017-05-22" class="day disabled">22</td>
                                                                                <td data-action="selectDay" data-day="2017-05-23" class="day disabled">23</td>
                                                                                <td data-action="selectDay" data-day="2017-05-24" class="day disabled">24</td>
                                                                                <td data-action="selectDay" data-day="2017-05-25" class="day disabled">25</td>
                                                                                <td data-action="selectDay" data-day="2017-05-26" class="day disabled">26</td>
                                                                                <td data-action="selectDay" data-day="2017-05-27" class="day disabled weekend">27</td>
                                                                                <td data-action="selectDay" data-day="2017-05-28" class="day disabled weekend">28</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td data-action="selectDay" data-day="2017-05-29" class="day disabled">29</td>
                                                                                <td data-action="selectDay" data-day="2017-05-30" class="day disabled">30</td>
                                                                                <td data-action="selectDay" data-day="2017-05-31" class="day disabled">31</td>
                                                                                <td data-action="selectDay" data-day="2017-06-01" class="day new disabled">1</td>
                                                                                <td data-action="selectDay" data-day="2017-06-02" class="day new disabled">2</td>
                                                                                <td data-action="selectDay" data-day="2017-06-03" class="day new disabled weekend">3</td>
                                                                                <td data-action="selectDay" data-day="2017-06-04" class="day new disabled weekend">4</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td data-action="selectDay" data-day="2017-06-05" class="day new disabled">5</td>
                                                                                <td data-action="selectDay" data-day="2017-06-06" class="day new disabled">6</td>
                                                                                <td data-action="selectDay" data-day="2017-06-07" class="day new disabled">7</td>
                                                                                <td data-action="selectDay" data-day="2017-06-08" class="day new disabled">8</td>
                                                                                <td data-action="selectDay" data-day="2017-06-09" class="day new disabled">9</td>
                                                                                <td data-action="selectDay" data-day="2017-06-10" class="day new disabled weekend">10</td>
                                                                                <td data-action="selectDay" data-day="2017-06-11" class="day new disabled weekend">11</td>
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
                                                                                    <span data-action="selectMonth" class="month">4月</span>
                                                                                    <span data-action="selectMonth" class="month active">5月</span>
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
                                                                                <th class="prev disabled" data-action="previous">
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
                                                                                <td data-action="selectDay" data-day="2017-05-01" class="day disabled">1</td>
                                                                                <td data-action="selectDay" data-day="2017-05-02" class="day disabled">2</td>
                                                                                <td data-action="selectDay" data-day="2017-05-03" class="day disabled">3</td>
                                                                                <td data-action="selectDay" data-day="2017-05-04" class="day disabled">4</td>
                                                                                <td data-action="selectDay" data-day="2017-05-05" class="day disabled">5</td>
                                                                                <td data-action="selectDay" data-day="2017-05-06" class="day disabled weekend">6</td>
                                                                                <td data-action="selectDay" data-day="2017-05-07" class="day disabled weekend">7</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td data-action="selectDay" data-day="2017-05-08" class="day disabled">8</td>
                                                                                <td data-action="selectDay" data-day="2017-05-09" class="day disabled">9</td>
                                                                                <td data-action="selectDay" data-day="2017-05-10" class="day disabled">10</td>
                                                                                <td data-action="selectDay" data-day="2017-05-11" class="day disabled">11</td>
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
                                                                                    <span data-action="selectMonth" class="month disabled">4月</span>
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
                    <div class="inline w-sm va-m m-l-xs">
                        <div class="input-group">
                            <input type="text" placeholder="学员" ng-model="param_student_name" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly">
                            <span class="input-group-btn">
                                <button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员" @click="lbShowDailog('lb-selectstudenttpl')">
                                    <i class="icon-user"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                    <button ng-click="$util.open('tpl/app/widget/attendance.modal.html','lg',{})" @click="lbShowDailog('lb-attendancemodal')">
                        <i class="icon-plus"></i>考勤登记
                    </button>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped table-hover b-t b-light">
                    <thead>
                        <tr>
                            <th>学员</th>
                            <th>课程/班级</th>
                            <th>上课老师</th>
                            <th>考勤时间</th>
                            <th>出勤状态</th>
                            <th>考勤方式</th>
                            <th>登记时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td class="ng-binding">
                                <span ng-bind-html="item.student.sex|sex:0" class="ng-binding">
                                    <i class="fa fa-male"></i>
                                </span>李达康
                            </td>
                            <td class="ng-binding">古典吉他初级</td>
                            <td class="ng-binding">陈佳木</td>
                            <td class="ng-binding">05-12 11:00</td>
                            <td>
                                <span class="label bg-success ng-scope" ng-if="item.is_in == '1'">正常出勤</span>
                            </td>
                            <td>
                                <span class="label bg-info ng-scope" ng-if="item.att_way == '0'">后台登记</span>
                            </td>
                            <td class="ng-binding">05-12 09:06</td>
                        </tr>
                        <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                            <td class="ng-binding">
                                <span ng-bind-html="item.student.sex|sex:0" class="ng-binding">
                                    <i class="fa fa-female"></i>
                                </span>小兵
                            </td>
                            <td class="ng-binding">3期班</td>
                            <td class="ng-binding">陈佳木</td>
                            <td class="ng-binding">05-12 11:00</td>
                            <td>
                                <span class="label bg-success ng-scope" ng-if="item.is_in == '1'">正常出勤</span>
                            </td>
                            <td>
                                <span class="label bg-info ng-scope" ng-if="item.att_way == '0'">后台登记</span>
                            </td>
                            <td class="ng-binding">05-12 09:05</td>
                        </tr>
                    </tbody>
                </table>
                <div class="grid-data-result"></div>
            </div>
            <div class="panel-footer">
                <div class="row">
                    <div class="col-sm-4 col-xs-12"></div>
                    <div class="col-sm-4 text-center">
                        <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 2 条记录">共 2 条记录</small>
                    </div>
                    <div class="col-sm-4 text-right text-center-xs">
                        <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'absences',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>